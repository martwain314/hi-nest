import { CompanyInsuranceAmts } from "./CompanyInsuranceAmts";
import { Users } from "./Users";
export declare class CompanyInsurances {
    id: number;
    userId: number;
    resYear: string | null;
    resHealthInsuranceCardNo: string | null;
    resCompanyNm: string | null;
    commStartDate: string | null;
    commEndDate: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    companyInsuranceAmts: CompanyInsuranceAmts[];
    user: Users;
}
