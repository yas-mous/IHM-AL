import {SeverityLevel} from "./severity";
import {Doctor} from "./doctor";
import {EmergencyContact} from "./emergency-contact";


export interface Patient {
  id: string;  // MongoDB ID as string
  name: string;
  birthDate: Date;  // BirthDate is of type Date
  severity: SeverityLevel;  // SeverityLevel as an enum
  primaryDoctor: Doctor;  // Assuming Doctor is another model
  emergencyContact: EmergencyContact;  // Assuming EmergencyContact is another model
}
