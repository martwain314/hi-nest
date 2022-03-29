import { Users } from "./Users";
export declare class IdentityConfirmations {
    id: number;
    userId: number;
    resIssueNo: string | null;
    resUserBirth: string | null;
    resJoinUserType: string | null;
    resCompanyNm: string | null;
    commStartDate: string | null;
    commEndDate: string | null;
    resIssueDate: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    user: Users;
}
