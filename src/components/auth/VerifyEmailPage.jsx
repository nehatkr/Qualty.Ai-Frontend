import { useEffect, useState, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../../utils/constants";

export default function VerifyEmailPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("Verifying...");
  const hasRun = useRef(false); // ✅ Prevent double execution

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const verifyEmail = async () => {
      const token = searchParams.get("token");
      const role = searchParams.get("role");

      if (!token || !role) {
        setStatus("Invalid verification link.");
        toast.error("Invalid verification link.");
        return;
      }

      try {
        const res = await fetch(`${BASE_URL}/auth/verify-email?token=${token}&role=${role}`);
        const msg = await res.text();

        if (!res.ok) {
          setStatus(msg || "Verification failed.");
          toast.error(msg || "Verification failed.");
          return;
        }

        setStatus(msg);
        toast.success(msg);
        setTimeout(() => navigate("/login"), 3000);
      } catch (error) {
        setStatus("Verification failed.");
        toast.error("Verification failed.");
      }
    };

    verifyEmail();
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h2 className="text-3xl font-bold mb-4">Email Verification</h2>
        <p className="text-lg text-gray-300">{status}</p>
      </div>
    </div>
  );
}
