export interface OnboardingFormData {
  // Basic Information
  name: string;
  age: number;
  gender?: 'male' | 'female' | 'other' | 'prefer-not-to-say';
  livingSituation: 'alone' | 'with-family' | 'with-friends' | 'care-facility';

  // Health & Medical History
  medicalConditions: string[];
  takingMedications: boolean;
  wearableDeviceConnected: boolean;
  hasChronicIllness: boolean;
  chronicIllnessTypes?: ('diabetes' | 'hypertension' | 'heart-disease' | string)[];

  // Health Monitoring & Alerts
  tracksHeartRate: boolean;
  tracksSpO2: boolean;
  tracksStressLevels: boolean;
  emergencyAlertsEnabled: boolean;

  // Support System
  hasDoctor: boolean;
  connectWithCaregiver: boolean;
  emergencyContact: {
    name: string;
    contact: string;
  };

  // Lifestyle & Behavior
  stressLevel: 'low' | 'moderate' | 'high';
  sleepHours: number;
  physicalActivity: 'daily' | 'few-times-week' | 'rarely';
  dietPreference?: 'balanced' | 'vegetarian' | 'keto' | 'other';

  // Health Goals
  primaryGoals: ('improve-heart-health' | 'manage-stress' | 'better-sleep' | 'prevent-chronic-illness' | string)[];
  setHealthReminders: boolean;

  // Privacy & Preferences
  acceptAiSuggestions: boolean;
  shareAnonymousData: boolean;
}

export type OnboardingStep =
  | 'basic-info'
  | 'health-history'
  | 'health-monitoring'
  | 'support-system'
  | 'lifestyle'
  | 'health-goals'
  | 'privacy';
