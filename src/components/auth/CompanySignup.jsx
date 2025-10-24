import React, { useState, useCallback, useMemo } from "react";
import {
  Mail,
  Lock,
  User,
  Phone,
  Briefcase,
  FileText,
  MapPin,
  Globe,
  Calendar,
  Users,
  DollarSign,
  List,
  CheckCircle,
  XCircle,
  Eye,
  EyeOff,
} from "lucide-react";

const useInspectionForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = useCallback((data) => {
    const newErrors = {};
    const requiredFields = [
      "companyType",
      "contactPersonName",
      "companyEmail",
      "password",
      "website",
      "companyName",
      "companyPhoneNumber",
      "mobileNumber",
      "companyAddressLine1",
      "businessLicenseNumber",
      "establishYear",
      "employeeCount",
      "serviceOffered",
      "businessLicenseDocument",
      "incorporationCertificate",
      "insuranceDocument",
    ];

    requiredFields.forEach((key) => {
      if (
        !data[key] ||
        (typeof data[key] === "string" && data[key].trim() === "")
      ) {
        const label = key
          .replace(/([A-Z])/g, " $1")
          .trim()
          .toLowerCase()
          .replace(/^./, (str) => str.toUpperCase());
        newErrors[key] = `${label} is required.`;
      }
    });

    if (data.companyName && data.companyName.length > 100) {
      newErrors.companyName = "Company Name cannot exceed 100 characters.";
    }

    if (data.companyEmail && !/\S+@\S+\.\S+/.test(data.companyEmail)) {
      newErrors.companyEmail = "Email address is invalid.";
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (data.password) {
      if (data.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters long.";
      } else if (!passwordRegex.test(data.password)) {
        newErrors.password =
          "Must contain 1 capital letter, 1 small letter, 1 number, and 1 special character (@$!%*?&).";
      }
    }

    const mobileNum = data.mobileNumber
      ? data.mobileNumber.replace(/\D/g, "")
      : "";
    if (data.companyType === "Indian") {
      if (mobileNum.length !== 10) {
        newErrors.mobileNumber =
          "Indian mobile number must be exactly 10 digits.";
      }
    } else if (data.companyType === "International") {
      if (mobileNum.length <= 10) {
        newErrors.mobileNumber =
          "International mobile number must be more than 10 digits.";
      }
    }

    const phoneNum = data.companyPhoneNumber
      ? data.companyPhoneNumber.replace(/\D/g, "")
      : "";
    if (phoneNum.length > 0 && phoneNum.length < 6) {
      newErrors.companyPhoneNumber =
        "Company Phone number must be at least 6 digits.";
    }

    if (data.businessLicenseNumber && data.businessLicenseNumber.length > 50) {
      newErrors.businessLicenseNumber =
        "Business License Number cannot exceed 50 characters.";
    }

    if (data.website && data.website.length > 200) {
      newErrors.website = "Website URL cannot exceed 200 characters.";
    }

    if (data.companyAddressLine1 && data.companyAddressLine1.length < 10) {
      newErrors.companyAddressLine1 = `Address must be a minimum of 10 characters for complete registration details. Current: ${data.companyAddressLine1.length}`;
    }else if (data.companyAddressLine1.length > 350) {
        newErrors.companyAddressLine1 = `Address cannot exceed 350 characters. Current: ${data.companyAddressLine1.length}`;
    }

    const currentYear = new Date().getFullYear();
    const year = parseInt(data.establishYear);
    if (
      data.establishYear &&
      (isNaN(year) || year < 1900 || year > currentYear)
    ) {
      newErrors.establishYear = `Must be a valid year between 1900 and ${currentYear}.`;
    }

    return newErrors;
  }, []);

  const handleChange = useCallback(
    (event) => {
      const { name, value, type, files } = event.target;

      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "file" ? files[0] : value,
      }));

      if (errors[name]) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: null,
        }));
      }
    },
    [errors]
  );

  const handleSubmit = useCallback(
    async (callback) => {
      const validationErrors = validate(formData);
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length === 0) {
        setIsSubmitting(true);
        try {
          await new Promise((resolve) => setTimeout(resolve, 1500));
          callback(formData);
        } catch (e) {
          console.error("Submission failed:", e);
        } finally {
          setIsSubmitting(false);
        }
      }
    },
    [formData, validate]
  );

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    validate,
  };
};

const inputBaseClasses = (error) => `
  w-full p-3 bg-gray-100 border
  text-gray-900 placeholder-gray-500
  rounded-lg transition-all duration-200
  focus:ring-2 focus:ring-opacity-75 focus:outline-none
  ${
    error
      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
      : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
  }
`;

const FormField = ({ id, label, children, error, optional = false }) => (
  <div className="flex flex-col space-y-2">
    <label htmlFor={id} className="text-sm font-medium text-black">
      {label}
      {optional && <span className="text-gray-500 text-xs"> (optional)</span>}
    </label>
    {children}
    {error && (
      <p className="text-xs text-red-600 mt-1 flex items-center">
        <XCircle size={12} className="mr-1" />
        {error}
      </p>
    )}
  </div>
);

const InputField = React.forwardRef(
  (
    {
      id,
      label,
      name,
      type = "text",
      value,
      onChange,
      error,
      placeholder,
      readOnly,
      optional,
      icon: Icon,
      ...props
    },
    ref
  ) => (
    <FormField id={id} label={label} error={error} optional={optional}>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
        )}
        <input
          ref={ref}
          id={id}
          name={name}
          type={type}
          value={value || ""}
          onChange={onChange}
          placeholder={placeholder}
          readOnly={readOnly}
          className={`${inputBaseClasses(error)} ${Icon ? "pl-10" : "pl-3"}`}
          {...props}
        />
        {readOnly && (
          <CheckCircle
            size={16}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-indigo-600"
          />
        )}
      </div>
    </FormField>
  )
);

const PasswordInputField = ({
  id,
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const Icon = showPassword ? EyeOff : Eye;

  return (
    <FormField id={id} label={label} error={error}>
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
        <input
          id={id}
          name={name}
          type={showPassword ? "text" : "password"}
          value={value || ""}
          onChange={onChange}
          placeholder={placeholder}
          className={`${inputBaseClasses(error)} pl-10 pr-10`}
          {...props}
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-900 transition-colors"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          <Icon size={18} />
        </button>
      </div>
    </FormField>
  );
};

const SelectField = ({
  id,
  label,
  name,
  value,
  onChange,
  error,
  options,
  ...props
}) => (
  <FormField id={id} label={label} error={error}>
    <div className="relative">
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`${inputBaseClasses(error)} appearance-none pr-10`}
        {...props}
      >
        <option value="" disabled className="text-gray-500">
          Select...
        </option>
        {options.map((opt) => (
          <option
            key={opt.value}
            value={opt.value}
            className="bg-white text-gray-900"
          >
            {opt.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
        <svg
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  </FormField>
);

const TextareaField = ({
  id,
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  optional,
  ...props
}) => (
  <FormField id={id} label={label} error={error} optional={optional}>
    <textarea
      id={id}
      name={name}
      value={value || ""}
      onChange={onChange}
      placeholder={placeholder}
      rows={3}
      className={`${inputBaseClasses(error)} resize-y`}
      {...props}
    />
  </FormField>
);

const MobileInputField = ({
  id,
  label,
  name,
  value,
  onChange,
  error,
  companyType,
}) => {
  const hintText = useMemo(() => {
    if (companyType === "Indian");
    if (companyType === "International");
    return "Select Company Type to see number rules.";
  }, [companyType]);

  const dialCode = useMemo(() => {
    if (companyType === "Indian") return "+91";
    if (companyType === "International") return "Other";
    return "...";
  }, [companyType]);

  return (
    <FormField id={id} label={label} error={error}>
      <div className="flex">
        <div
          className={`
          flex items-center justify-center px-4 py-3 text-gray-700 bg-gray-200 border
          rounded-l-lg text-sm font-semibold whitespace-nowrap
          ${error ? "border-red-500" : "border-gray-300"}
        `}
        >
          {dialCode}
        </div>

        <input
          id={id}
          name={name}
          type="tel"
          value={value || ""}
          onChange={onChange}
          placeholder="Mobile Number"
          className={`${inputBaseClasses(error)} rounded-l-none focus:z-10`}
        />
      </div>
      <p className="text-xs text-gray-500 mt-1">{hintText}</p>
    </FormField>
  );
};

const FileField = ({
  id,
  label,
  name,
  onChange,
  error,
  fileName,
  optional = false,
}) => (
  <FormField id={id} label={label} error={error} optional={optional}>
    <div className="flex items-center space-x-4">
      <label
        htmlFor={id}
        className={`
        cursor-pointer py-2 px-4 rounded-lg text-sm font-medium transition-colors
        text-white bg-black hover:bg-gray-800
      `}
      >
        Choose File
      </label>
      <input
        id={id}
        name={name}
        type="file"
        onChange={onChange}
        className="hidden"
        accept=".pdf,.doc,.docx"
      />
      <span className="text-gray-600 text-sm truncate max-w-[calc(100%-100px)]">
        {fileName || "No file chosen"}
      </span>
    </div>
  </FormField>
);

const initialFormState = {
  role: "Inspection Company",
  companyType: "",
  contactPersonName: "",
  companyEmail: "",
  password: "",
  companyName: "",
  companyPhoneNumber: "",
  mobileNumber: "",
  companyAddressLine1: "",
  companyAddressLine2: "",
  businessLicenseNumber: "",
  website: "",
  establishYear: "",
  employeeCount: "",
  serviceOffered: "",
  membershipID: "",
  taxCertificate: null,
  insuranceDocument: null,
  businessLicenseDocument: null,
  incorporationCertificate: null,
};

const companyTypeOptions = [
  { label: "Indian", value: "Indian" },
  { label: "International", value: "International" },
];

const employeeCountOptions = [
  { label: "1 - 50", value: "1-50" },
  { label: "51 - 200", value: "51-200" },
  { label: "201 - 500", value: "201-500" },
  { label: "501 - 1000", value: "501-1000" },
  { label: "1000+", value: "1000+" },
];

export default function App() {
  const { formData, errors, handleChange, handleSubmit, isSubmitting } =
    useInspectionForm(initialFormState);

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleFormSubmit = useCallback((data) => {
    console.log("Form Data Submitted:", data);
    setSubmissionStatus("success");
    setTimeout(() => setSubmissionStatus(null), 5000);
  }, []);

  const ButtonIcon = useMemo(() => {
    if (isSubmitting) return "⏳";
    if (submissionStatus === "success") return "✅";
    return "";
  }, [isSubmitting, submissionStatus]);

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gray-50 font-sans p-4 sm:p-8 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-2xl p-6 sm:p-10 border border-gray-200">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 tracking-wider text-gray-900">
          Inspection Company Signup
        </h2>

        {submissionStatus === "success" && (
          <div className="mb-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg flex items-center space-x-3">
            <CheckCircle size={20} />
            <p className="font-semibold">
              Application Submitted Successfully! Thank you.
            </p>
          </div>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(handleFormSubmit);
          }}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <InputField
              id="role"
              label="Role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              readOnly
              icon={User}
            />
            <SelectField
              id="companyType"
              label="Company Type"
              name="companyType"
              value={formData.companyType}
              onChange={handleChange}
              error={errors.companyType}
              options={companyTypeOptions}
            />
            <InputField
              id="companyName"
              label="Company Name (Max 100 chars)"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              error={errors.companyName}
              placeholder="e.g., Global Inspect Services"
              icon={Briefcase}
              maxLength={100}
            />

            <InputField
              id="contactPersonName"
              label="Contact Person Name"
              name="contactPersonName"
              value={formData.contactPersonName}
              onChange={handleChange}
              error={errors.contactPersonName}
              placeholder="e.g., Jane Doe"
              icon={User}
            />
            <InputField
              id="companyEmail"
              label="Company Email"
              name="companyEmail"
              type="email"
              value={formData.companyEmail}
              onChange={handleChange}
              error={errors.companyEmail}
              placeholder="e.g., contact@company.com"
              icon={Mail}
            />
            <PasswordInputField
              id="password"
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              placeholder="Min 8 chars: 1 Cap, 1 Small, 1 Num, 1 Special"
            />

            <InputField
              id="companyPhoneNumber"
              label="Company Phone Number"
              name="companyPhoneNumber"
              type="tel"
              value={formData.companyPhoneNumber}
              onChange={handleChange}
              error={errors.companyPhoneNumber}
              placeholder="e.g., 011-23456789"
              icon={Phone}
            />
            <MobileInputField
              id="mobileNumber"
              label="Mobile Number"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              error={errors.mobileNumber}
              companyType={formData.companyType}
            />

            <InputField
              id="businessLicenseNumber"
              label="Business License Number"
              name="businessLicenseNumber"
              value={formData.businessLicenseNumber}
              onChange={handleChange}
              error={errors.businessLicenseNumber}
              placeholder="License/Registration ID"
              icon={FileText}
              maxLength={50}
            />
            <InputField
              id="website"
              label="Website"
              name="website"
              type="url"
              value={formData.website}
              onChange={handleChange}
              error={errors.website}
              placeholder="e.g., https://www.company.com"
              maxLength={200}
            />
            <InputField
              id="membershipID"
              label="Membership ID (Meme Number)"
              name="membershipID"
              value={formData.membershipID}
              onChange={handleChange}
              error={errors.membershipID}
              placeholder="e.g., MEME-12345"
              requiredFields:true
            />
          </div>

          <div className="border-t border-gray-200 pt-6 space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Address & Establishment Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              <InputField
                id="establishYear"
                label="Establishment Year"
                name="establishYear"
                type="number"
                value={formData.establishYear}
                onChange={handleChange}
                error={errors.establishYear}
                placeholder="e.g., 2010"
                icon={Calendar}
              />
              <SelectField
                id="employeeCount"
                label="Employee Count"
                name="employeeCount"
                value={formData.employeeCount}
                onChange={handleChange}
                error={errors.employeeCount}
                options={employeeCountOptions}
                icon={Users}
              />
              <div className="md:col-span-2 lg:col-span-1">
                <InputField
                  id="companyAddressLine1"
                  label="Company Address Line 1"
                  name="companyAddressLine1"
                  value={formData.companyAddressLine1}
                  onChange={handleChange}
                  error={errors.companyAddressLine1}
                  placeholder="Address"
                  icon={MapPin}
                  maxLength={350}
                />
              </div>
              <InputField
                id="companyAddressLine2"
                label="Company Address Line 2"
                name="companyAddressLine2"
                value={formData.companyAddressLine2}
                onChange={handleChange}
                error={errors.companyAddressLine2}
                placeholder="Suite, Apt, etc."
                optional
                icon={MapPin}
              />
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <TextareaField
              id="serviceOffered"
              label="Service Offered"
              name="serviceOffered"
              value={formData.serviceOffered}
              onChange={handleChange}
              error={errors.serviceOffered}
              placeholder="Briefly describe the inspection services your company offers..."
              icon={List}
            />
          </div>

          <div className="border-t border-gray-200 pt-6 space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Required Documents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FileField
                id="businessLicenseDocument"
                label="Business License Document"
                name="businessLicenseDocument"
                onChange={handleChange}
                error={errors.businessLicenseDocument}
                fileName={formData.businessLicenseDocument?.name}
              />
              <FileField
                id="incorporationCertificate"
                label="Incorporation Certificate"
                name="incorporationCertificate"
                onChange={handleChange}
                error={errors.incorporationCertificate}
                fileName={formData.incorporationCertificate?.name}
              />
              <FileField
                id="insuranceDocument"
                label="Insurance Document"
                name="insuranceDocument"
                onChange={handleChange}
                error={errors.insuranceDocument}
                fileName={formData.insuranceDocument?.name}
              />
              <FileField
                id="taxCertificate"
                label="Tax Certificate"
                name="taxCertificate"
                onChange={handleChange}
                error={errors.taxCertificate}
                fileName={formData.taxCertificate?.name}
                optional
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || submissionStatus === "success"}
            className={`
              w-full py-3 mt-8 text-lg font-semibold rounded-xl
              transition-all duration-300 transform
              bg-black hover:bg-gray-800
              focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-opacity-50
              disabled:opacity-50 disabled:cursor-not-allowed
              flex items-center justify-center space-x-3 text-white
            `}
          >
            {isSubmitting ? (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              ButtonIcon
            )}
            <span>
              {isSubmitting
                ? "Submitting..."
                : submissionStatus === "success"
                ? "Application Received"
                : "Submit Application"}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
