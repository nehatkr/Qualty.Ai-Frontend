import {BASE_URL} from "../../utils/constants"


export const signUpCustomerAPI = async (formData) => {
  try {
    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) payload.append(key, value);
    });

    const response = await fetch(`${BASE_URL}/auth/signup/customer`, {
      method: 'POST',
      body: payload,
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Signup failed');
    return data;
  } catch (error) {
    console.error('Customer signup error:', error);
    throw error;
  }
};

// 🧾 Inspector Signup (with file uploads)
export const signUpInspectorAPI = async (formData) => {
  try {
    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) payload.append(key, value);
    });

    const response = await fetch(`${BASE_URL}/signup/inspector`, {
      method: 'POST',
      body: payload,
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Signup failed');
    return data;
  } catch (error) {
    console.error('Inspector signup error:', error);
    throw error;
  }
};

// 🔐 Sign In
export const signInAPI = async (credentials) => {
  try {
    const response = await fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Sign-in failed');
    return data;
  } catch (error) {
    console.error('Sign-in error:', error);
    throw error;
  }
};

// 🚪 Logout
export const logoutAPI = async () => {
  try {
    const response = await fetch(`${BASE_URL}/logout`, {
      method: 'POST',
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Logout failed');
    return data;
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
};
