export interface User {
    uid: string;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
    emailVerified: boolean;
    role?: string; // Role
    additionalInfo?: AdditionalInfo; // Propriété 'additionalInfo'
  }
  
  export interface AdditionalInfo {
    name?: string;
    userOption?: string;
    // Autres champs selon vos besoins
  }
  