import { CompanyInsuranceAmts } from "./CompanyInsuranceAmts";
import { CompanyInsurances } from "./CompanyInsurances";
import { HealthCheckupHospitals } from "./HealthCheckupHospitals";
import { HealthCheckupResults } from "./HealthCheckupResults";
import { IdentityConfirmations } from "./IdentityConfirmations";
export declare class Users {
    id: number;
    signalUuid: string | null;
    birthDate: string | null;
    termsAgree: "y" | null;
    termsAgreeDate: Date | null;
    termsCancel: "y" | null;
    termsCancelDate: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    ip: string | null;
    companyInsuranceAmts: CompanyInsuranceAmts[];
    companyInsurances: CompanyInsurances[];
    healthCheckupHospitals: HealthCheckupHospitals[];
    healthCheckupResults: HealthCheckupResults[];
    identityConfirmations: IdentityConfirmations[];
}
