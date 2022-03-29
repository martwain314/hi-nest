import { Users } from "./Users";
export declare class HealthCheckupHospitals {
    id: number;
    userId: number;
    resType: "0" | "1" | "2" | null;
    resCheckupType: string | null;
    resCheckupYear: string | null;
    resCheckupDate: string | null;
    resOrganizationName: string | null;
    resOpinion: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    user: Users;
}
