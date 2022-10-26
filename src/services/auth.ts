import * as crypto from "crypto";
import * as jwt from "jsonwebtoken";
import * as dayjs from "dayjs";

export class AuthService {
    public static async hashPassword(password: string) {
        return new Promise<passwordAndSalt>((resolve, reject) => {
            const salt = crypto.randomBytes(16).toString("hex");

            crypto.scrypt(
                password,
                salt,
                64,
                { N: 16384, r: 8, p: 2 },
                (err, dirivedKey) => {
                    if (err) reject(err);
                    resolve({
                        salt: salt,
                        hashPassword: dirivedKey.toString("hex"),
                    });
                }
            );
        });
    }

    public static async validatePassword(
        passwordHash: string,
        salt: string,
        password: string
    ) {
        return new Promise((resolve, reject) => {
            crypto.scrypt(
                password,
                salt,
                64,
                { N: 16384, r: 8, p: 2 },
                (err, dirivedKey) => {
                    if (err) reject(err);
                    resolve(passwordHash === dirivedKey.toString("hex"));
                }
            );
        });
    }

    public static createToken(userUuid: string) {
        const iat = dayjs().add(30, "days").millisecond();
        const token = jwt.sign({ sub: userUuid, iat }, process.env.JWT_SECRET);
        return token;
    }

    public static validateToken(token: string) {
        try {
            const res = jwt.verify(token, process.env.JWT_SECRET);
            return res;
        } catch (e) {
            return null;
        }
    }
}

interface passwordAndSalt {
    salt: string;
    hashPassword: string;
}
