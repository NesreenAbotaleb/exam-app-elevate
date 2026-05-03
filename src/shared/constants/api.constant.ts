// API Endpoints

// Login API Endpoint
export const LoginApiEndpoints = "/auth/login"

// Register API Endpoints
export const RegisterApiEndpoints = {
    emailStep: "/auth/send-email-verification",
    otpStep: "/auth/confirm-email-verification",
    registerStep: "/auth/register"
}

// Forget Password API Endpoint
export const ForgetPasswordApiEndpoints = {
    sendResetLink: "/auth/forgot-password",
    resetPassword: "/auth/reset-password"
}


export const HEADERS = {
    jsonBody: {
        "Content-Type": "application/json"
    }
}