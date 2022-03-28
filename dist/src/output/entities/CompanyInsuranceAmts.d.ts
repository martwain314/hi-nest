import { CompanyInsurances } from "./CompanyInsurances";
import { Users } from "./Users";
export declare class CompanyInsuranceAmts {
    id: number;
    companyInsuranceId: number;
    userId: number;
    resNoticeYm: string | null;
    resMeanMonthlyIncome: number | null;
    resHiSettleUpReason: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    companyInsurance: CompanyInsurances;
    user: Users;
}
