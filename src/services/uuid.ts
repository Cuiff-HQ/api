import { v4 as uuidv4 } from "uuid";

export class UuidService {
    public static getPrefixedUuid(prefix: string): string {
        return prefix + "_" + uuidv4();
    }
}
