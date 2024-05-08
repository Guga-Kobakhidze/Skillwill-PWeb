import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import React, { useRef, useState, useEffect } from "react";

const useForm = () => {
  const form = useRef<HTMLFormElement>();

  const RadioPrivateRef = useRef<HTMLInputElement>(null);
  const RadioCorporateRef = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [emailForm, setEmailForm] = useState<boolean>(false);

  const FirstNameRef = useRef<HTMLInputElement>(null);
  const LastNameRef = useRef<HTMLInputElement>(null);
  const PhoneNumRef = useRef<HTMLInputElement>(null);
  const EmailRef = useRef<HTMLInputElement>(null);

  const [warning, setWarning] = useState<boolean>(false);

  const [selectedValue, setSelectedValue] = useState<string>("");
  const [submited, setSubmited] = useState<boolean>(false);

  useEffect(() => {
    const handlePhoneNumInput = (e: Event) => {
      const input = e.target as HTMLInputElement;
      const inputValue = input.value;
      const numbersOnly = /^\d*$/;

      if (!inputValue.match(numbersOnly)) {
        input.value = inputValue.replace(/[^0-9]/g, "");
      }
    };

    const phoneNumField = PhoneNumRef.current;
    if (phoneNumField) {
      phoneNumField.addEventListener("input", handlePhoneNumInput);
      return () => {
        phoneNumField.removeEventListener("input", handlePhoneNumInput);
      };
    }
  }, [PhoneNumRef]);

  useEffect(() => {
    const inputFields = [FirstNameRef, LastNameRef, PhoneNumRef, EmailRef];

    const handleInputChange = () => {
      setWarning(false);
    };

    inputFields.forEach((field) => {
      const currentField = field.current;
      if (currentField) {
        currentField.addEventListener("input", handleInputChange);
        return () => {
          currentField.removeEventListener("input", handleInputChange);
        };
      }
    });
  }, [FirstNameRef, LastNameRef, PhoneNumRef, EmailRef]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const selectedRef =
      selectedValue === "Private Client" || selectedValue === "პირადი კლიენტი"
        ? RadioPrivateRef.current
        : RadioCorporateRef.current;

    if (
      FirstNameRef.current?.value === "" ||
      LastNameRef.current?.value === "" ||
      !PhoneNumRef.current?.value ||
      PhoneNumRef.current.value.trim().length < 9 ||
      EmailRef.current?.value === "" ||
      !emailRegex.test(EmailRef.current?.value || "")
    ) {
      setWarning(true);
      return;
    } else {
      const SubmitedForm: { [key: string]: string | number | undefined } = {
        firstName: FirstNameRef.current?.value,
        lastName: LastNameRef.current?.value,
        phoneNumber: PhoneNumRef.current?.value,
        email: EmailRef.current?.value,
      };

      if (selectedRef) SubmitedForm.client = selectedRef.value;

      if (checked) SubmitedForm.checked = "agreed";

      console.log(SubmitedForm);
      setSubmited(true);
    }

    if (emailForm) {
      emailjs
        .sendForm(
          "service_88hn9cw",
          "template_zvtywgo",
          form.current!,
          "B-uGOjbU4o3JcFiPd"
        )
        .then(
          (result: EmailJSResponseStatus) => {
            console.log(result.status);
            console.log("message sent");
            if (form.current) {
              form.current.reset();
            }
          },
          (error) => {
            console.log(error.text);
          }
        )
        .finally(() => {
          setLoading(false);
        });
    }

    if (FirstNameRef.current) FirstNameRef.current.value = "";
    if (LastNameRef.current) LastNameRef.current.value = "";
    if (EmailRef.current) EmailRef.current.value = "";
    if (PhoneNumRef.current) PhoneNumRef.current.value = "";
  };

  return {
    RadioPrivateRef,
    RadioCorporateRef,
    checked,
    setChecked,
    FirstNameRef,
    LastNameRef,
    PhoneNumRef,
    EmailRef,
    warning,
    setSelectedValue,
    submited,
    onSubmit,
    setEmailForm,
    form,
  };
};

export default useForm;
