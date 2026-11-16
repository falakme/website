import type { Metadata } from "next";
import { Legal, type Block } from "@/components/legal";

export const metadata: Metadata = { title: "Privacy Policy | Falak.me" };

const blocks: Block[] = [
  { t: "h2", v: "1. Information We Collect" },
  { t: "h3", v: "Personal Information" },
  { t: "p", v: "We may collect personal details like your name, email address, phone number, and payment information to process transactions, provide customer support, and offer personalized experiences." },
  { t: "h3", v: "Device and Usage Data" },
  { t: "p", v: "We automatically gather data on how you interact with our services, including your IP address, device type, operating system, browser type, and site navigation." },
  { t: "h3", v: "Cookies and Tracking Technologies" },
  { t: "p", v: "We use cookies and similar technologies to enhance your experience, remember preferences, and analyze site traffic. You can manage cookie settings through your browser." },
  { t: "h2", v: "2. How We Use Your Information" },
  { t: "p", v: "We use your information to enhance your experience and improve our services:" },
  { t: "ul", v: [
    ["Service Delivery: ", "Your data helps us provide personalized responses, suggestions, and other features of Landin."],
    ["Improvement and Development: ", "We analyze usage data to improve Landin’s features and functionality."],
    ["Customer Support: ", "If you contact us for support, we may use your information to address and resolve your concerns."],
    ["Security: ", "We use information to maintain the safety and security of Landin, including monitoring for suspicious activities and improving fraud detection."],
  ] },
  { t: "h2", v: "3. Data Sharing and Disclosure" },
  { t: "p", v: "We do not sell or rent your personal information to third parties. However, we may share data under the following circumstances:" },
  { t: "ul", v: [
    ["Service Providers: ", "We may share your data with third-party vendors who assist in operating Landin or improving the services, such as hosting, analytics, or customer support."],
    ["Legal Requirements: ", "We may disclose information if required to do so by law or in response to valid legal requests."],
    ["Business Transfers: ", "In the event of a merger, acquisition, or asset sale, your information may be transferred."],
  ] },
  { t: "h2", v: "4. Data Security" },
  { t: "p", v: "We take reasonable measures to protect your data from unauthorized access, disclosure, or alteration. However, no online service is entirely secure, and we cannot guarantee the absolute security of your information." },
  { t: "h2", v: "5. Your Data Rights" },
  { t: "p", v: "You have rights regarding your personal information, including:" },
  { t: "ul", v: [
    ["Access: ", "You may request access to the data we hold about you."],
    ["Correction: ", "If your data is inaccurate, you can request corrections."],
    ["Deletion: ", "You can request the deletion of your personal information, subject to legal obligations."],
    ["Opt-Out: ", "You can opt out of data collection for certain uses like personalized marketing."],
  ] },
  { t: "h2", v: "6. Third-Party Links" },
  { t: "p", v: "Landin may contain links to third-party websites or services. We are not responsible for the privacy practices or content of those external sites." },
  { t: "h2", v: "7. Children’s Privacy" },
  { t: "p", v: "Landin is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from children. If we learn that we have collected data from a child without parental consent, we will take steps to delete that information." },
  { t: "h2", v: "8. Changes to This Privacy Policy" },
  { t: "p", v: "We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the updated date will be reflected at the top. We encourage you to review this policy periodically to stay informed about how we protect your information." },
  { t: "h2", v: "9. Contact Us" },
  { t: "p", v: "If you have any questions or concerns about this Privacy Policy or Landin’s data practices, please contact us at support@landin.com." },
  { t: "p", v: "By using Landin, you agree to the terms outlined in this Privacy Policy." },
];

export default function Page() {
  return <Legal title="Privacy Policy" tag="Latest Policy" sub="Updated Date: Oct 28, 2024, 12:00 AM" blocks={blocks} />;
}
