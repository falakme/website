import type { Metadata } from "next";
import { Legal, type Block } from "@/components/legal";

export const metadata: Metadata = { title: "Terms & Conditions | Falak.me" };

const blocks: Block[] = [
  { t: "h2", v: "1. Acceptance of Terms" },
  { t: "p", v: "By using Landin, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, as well as our Privacy Policy. These Terms apply to all users of the platform, including visitors, registered users, and any others who access Landin." },
  { t: "h2", v: "2. Use of Services" },
  { t: "p", v: "To ensure the platform operates smoothly and legally, we require users to adhere to certain rules and conditions regarding access and use of Landin. Below are the guidelines that you must follow:" },
  { t: "ul", v: [
    ["Eligibility: ", "You must be at least 13 years of age to use Landin. If you are under the age of 13, you are not permitted to access or use the platform."],
    ["Account Creation: ", "To access certain features of Landin, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information, including your password, and for all activities that occur under your account."],
    ["Prohibited Activities: ", "You agree not to misuse Landin’s services. This includes but is not limited to:", [
      "Using Landin for unlawful purposes or promoting illegal activities.",
      "Attempting to gain unauthorized access to our systems or other users’ accounts.",
      "Uploading harmful content such as viruses or other malicious software.",
      "Harassing, threatening, or defaming other users.",
    ]],
  ] },
  { t: "h2", v: "3. User Content" },
  { t: "p", v: "Landin allows you to submit and display content. To clarify ownership and responsibilities, we outline how user-generated content is treated below:" },
  { t: "ul", v: [
    ["Ownership: ", "You retain ownership of any content you submit, post, or display on Landin, including messages, images, and other data (“User Content”). By submitting content, you grant Landin a non-exclusive, royalty-free, worldwide license to use, store, display, and distribute your User Content for the purpose of operating and improving the platform."],
    ["Responsibility: ", "You are solely responsible for your User Content and any consequences of submitting it. Landin reserves the right to remove or modify User Content that violates these Terms or any applicable laws."],
  ] },
  { t: "h2", v: "4. Intellectual Property" },
  { t: "p", v: "We respect intellectual property rights, both our own and those of others. This section explains how you may use our proprietary materials and what limitations apply:" },
  { t: "ul", v: [
    ["Ownership: ", "Landin and its associated content, including but not limited to software, trademarks, logos, and designs, are owned by Landin or its licensors and are protected by intellectual property laws."],
    ["Restrictions: ", "You may not copy, modify, distribute, or create derivative works of any part of Landin without our prior written permission. You may not reverse engineer, decompile, or disassemble the software used in Landin."],
  ] },
  { t: "h2", v: "5. Termination" },
  { t: "p", v: "Landin reserves the right to suspend or terminate your access to the platform at any time and for any reason, including if you violate these Terms or engage in prohibited activities. Upon termination, all rights and licenses granted to you under these Terms will cease immediately." },
  { t: "h2", v: "6. Disclaimers" },
  { t: "p", v: "To clarify the limits of Landin’s responsibilities, we provide the following disclaimers about the services we offer:" },
  { t: "ul", v: [
    ["No Warranty: ", "Landin is provided “as is” and “as available,” without warranties of any kind, either express or implied. We do not guarantee that the platform will be uninterrupted, secure, or error-free. Use of Landin is at your own risk."],
    ["Accuracy of Information: ", "While Landin strives to provide accurate and helpful information, we do not guarantee the accuracy, completeness, or usefulness of any content or information on the platform."],
  ] },
  { t: "h2", v: "7. Limitation of Liability" },
  { t: "p", v: "To the fullest extent permitted by law, Landin and its affiliates, directors, employees, or partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use of the platform or these Terms." },
  { t: "h2", v: "8. Changes to Terms" },
  { t: "p", v: "Landin reserves the right to modify or update these Terms at any time. Any changes will be posted on this page, and the updated date will be reflected at the top. Your continued use of the platform after any modifications constitutes acceptance of the updated Terms." },
  { t: "h2", v: "9. Governing Law" },
  { t: "p", v: "These Terms and your use of Landin shall be governed by and construed in accordance with the laws of the United States of America, without regard to its conflict of law provisions." },
  { t: "h2", v: "10. Contact Us" },
  { t: "p", v: "If you have any questions or concerns about these Terms and Conditions, please contact us at support@landin.com." },
  { t: "p", v: "By using Landin, you agree to these Terms and Conditions." },
];

export default function Page() {
  return <Legal title="Terms & Conditions" tag="Terms & Conditions" sub="Last Updated: Oct 15, 2024, 12:00 AM" blocks={blocks} />;
}
