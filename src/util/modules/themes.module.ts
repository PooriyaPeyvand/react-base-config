
declare module '@mui/material/styles' {
    interface Theme {
        status : {
            success : string;
            pending : string;
            danger : string;
        }
        shape : {
            primaryRadius : number;
            secondaryRadius : number;
        }
    }
    interface ThemeOptions {
        status ?: {
            success ?: string;
            pending ?: string;
            danger ?: string;
        };
        shape ?: {
            primaryRadius ?: number;
            secondaryRadius ?: number;
        }
    }
}