import Image from "next/image";
import React from "react";

const privacy = () => {
  return (
    <div className="w-full text-white">
      <div className="space-y-8">
        <div className="flex flex-col justify-center items-center gap-4 leading-4">
          <Image src={"/pixora.png"} alt="logo" height={80} width={80} />
          <h2 className="text-lg font-semibold">PIXORA</h2>
          <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
        </div>
        <div className="flex flex-col justify-start items-start gap-3 ">
          <h2 className="text-lg font-semibold">
            Items of personal information to be collected
          </h2>
          <p className="text-[13px] text-gray-500  leading-relaxed ">
            When signing up for membership using a social media login, we
            collect your nickname, social media ID, email address, and profile
            image from the chosen social media platform. Also, email address
            (ID), nickname, and password will be collected when signing up with
            email address. In the course of handling events and customer
            inquiry, email address and event prize shipment information may be
            additionally collected. In the course of using services, IP
            addresses, device information (language, country, etc.), service use
            records, records of poor use, terminal information, etc. may be
            automatically generated and collected. The service provides features
            that utilize facial data, but facial data is not collected or
            stored.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h2 className="text-lg font-semibold">
            Personal Information collection methods
          </h2>
          <p className="text-[13px] text-gray-500  leading-relaxed ">
            The company collects personal information to provide services in the
            following manner: <br />
            <ul className="list-disc ml-4  leading-relaxed ">
              <li>
                Directly collected from the user during the course of
                subscription and use of PRISM Live Studio
              </li>
              <li>Provided from the affiliated partners</li>
              <li>Collected through the created information-gathering tools</li>
            </ul>
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h2 className="text-lg font-semibold ">
            Purposes of collecting and using personal information{" "}
          </h2>
          <p className="text-[13px] text-gray-500  leading-relaxed ">
            The company uses the collected information for the following
            purposes: <br />
            <ul className="list-disc ml-4  leading-relaxed ">
              <li>To help users seamlessly access services</li>
              <li>To identify users and prevent illegal use of services</li>
              <li>To create statistical data about service use</li>
              <li>For surveys and analysis required to improve services</li>
              <li>For a lottery and prize shipment of campaigns and events</li>
              <li>
                To identify users and respond to an inquiry when a user submits
                one
              </li>
              <li>
                To notify depending on needs, including important notices, etc.
              </li>
              <li>To deliver advertising information such as events</li>
            </ul>
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h2 className="text-lg font-semibold">
            Sharing and supply of personal information{" "}
          </h2>
          <p className="text-[13px] text-gray-500  leading-relaxed ">
            In principle, the company does not provide any external party with
            the personal information of the user without prior written consent.
            However, exceptions are as below. <br />
            <ul className="list-disc ml-4  leading-relaxed ">
              <li>If the user agrees in advance</li>
              <li>If under the provisions of the law and regulations</li>
            </ul>
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h2 className="text-lg font-semibold">
            Consignment of handling personal information{" "}
          </h2>
          <p className="text-[13px] text-gray-500  leading-relaxed ">
            The company has consigned the personal information for the service
            supplied as below. Trustee company and consigned details <br />
            <ul className="list-decimal ml-4  leading-relaxed ">
              <li>
                Infrastructure operation for service supply and prevention of
                illegal use of services: NAVER Cloud Corp., NIT Service Corp.
              </li>
              <li>Data backup (storage): NAVER Cloud Corp.</li>
              <li>
                Customer service, service operation: InComms Corp., Green Web
                Service Corp., CommPartners Corp.
              </li>
            </ul>
            <ul className="list-disc ml-4  leading-relaxed ">
              <li>
                Period of retention and use of personal information: Until
                withdrawing from the membership or the termination of
                consignment contract
              </li>
            </ul>
            <p className="text-[13px] text-gray-500">
              The trustee NAVER CLOUD stores the following personal information
              overseas.
            </p>
            <p className="text-[13px] text-gray-500 ">
              To ensure uninterrupted service even during a disaster, the
              company backs up (stores) data at home and abroad. The personal
              information necessary to provide the PRISM Live Studio service is
              securely stored overseas. If you do not want your personal
              information to be stored overseas, you can opt out by cancelling
              your membership. However, you will not be able to continue using
              the service.
            </p>
            <ul className="list-disc ml-4">
              <li>Trustee: NAVER CLOUD Co., Ltd.</li>
              <li>
                Location: Singapore (#24-01, Vision Exchange, 2 Venture Drive,
                Singapore 608526).{" "}
              </li>
              <li>
                Consignment date and method: Remotely transferred to location
                via private network on July 13, 2020.{" "}
              </li>
              <li>
                Information management contact: dl_ncloud_privacy@navercorp.com{" "}
              </li>
              <li>
                Entrusted personal information: Minimum user data required for
                recovery.{" "}
              </li>
              <li>
                Entrusted tasks: Overseas data backup (storage) to protect user
                data from disasters.{" "}
              </li>
              <li>
                Retention and use of personal information: Until the
                cancellation of membership or termination of the consignment
                contract.{" "}
              </li>
            </ul>
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h2 className="text-lg font-semibold">
            User rights and how to exercise them{" "}
          </h2>
          <p className="text-[13px] text-gray-500  leading-relaxed ">
            <ul className="list-disc ml-4  leading-relaxed ">
              <li>
                PRISM Live Studio is available to users aged 14 and older. Users
                can look up and modify their registered personal information,
                and request account deletion at any time.
              </li>
              <li>
                Users may request the suspension of the processing of personal
                information at any time. However, the request to suspend
                processing may be denied due to the provisions of the law.
              </li>
              <li>
                Users may withdraw their consent to the collection and use of
                their personal information at any time by cancelling their
                memberships.
              </li>
              <li>
                If the user asks for correction of an error in their personal
                information, the relevant personal information will not be used
                or provided until the correction is completed. In addition, if
                this incorrect personal information was already provided to a
                third party, we will notify the result of correction to the
                third party without delay and have it corrected.
              </li>
              <li>
                The company has terminated or deleted personal information upon
                the request of the users or legal representatives as specified
                in the “Period of retention and use of personal information”,
                and also processed not to browse or use for other purposes.
              </li>
            </ul>
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h2 className="text-lg font-semibold">
            Matters regarding installation/operation and rejection of automatic
            devices collecting personal information{" "}
          </h2>
          <p className="text-[13px] text-gray-500  leading-relaxed ">
            <ul className="list-disc ml-4  leading-relaxed ">
              <li className="text-white">The purpose of the use of cookies</li>
              They are used to identify the visit and use types and the volume
              of users of the services and websites that the users have used,
              and to provide optimized information to the users.
              <li className="text-white">
                The installation/operation and rejection of cookies
              </li>
              The users have the option to set cookies. The users may allow or
              deny the storage of cookies from the option menu which is
              available in the browser and OS. However, if they refuse to save
              cookies, some services requiring login may not be accessible.
              <li className="text-white">
                The permission for the third-party accounts
              </li>
              A user can revoke a permission for accessing for Google account.{" "}
              <span className="text-white underline">
                Google account permission page
              </span>
            </ul>
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h2 className="text-lg font-semibold">
            Period of retention and use of personal information{" "}
          </h2>
          <p className="text-[13px] text-gray-500  leading-relaxed ">
            In principle, the company will destroy the personal information of
            users without delay, when purposes of collecting and using personal
            information have been achieved. However, if there is a need to store
            it pursuant to the company’s internal policy or the relevant laws
            and regulations, it may be kept for a certain period of time. To
            prevent fraudulent subscriptions and illegal use, we retain one-way
            encrypted IDs for 6 months.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h2 className="text-lg font-semibold">
            Destruction procedures and methods of personal information{" "}
          </h2>
          <p className="text-[13px] text-gray-500  leading-relaxed ">
            The company’s destruction procedures and methods of personal
            information are as below:
            <ul className="list-disc ml-4  leading-relaxed ">
              <li className="text-white">Destruction procedures</li>
              After the purpose of use is achieved, the information that the
              user entered for the service use shall be destroyed in accordance
              with internal policy and the relevant laws and regulations after
              being stored for a certain period of time. The relevant personal
              information shall not be used for purposes other than the storage
              purpose, except in cases according to the law.
              <li className="text-white">Destruction method</li>
              Personal information printed on paper shall be destroyed in a
              shredder, and personal information stored as an electronic file
              type shall be deleted by using technical methods that will disable
              the reproduction of the records.
            </ul>
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h2 className="text-lg font-semibold">
            Contact related to privacy operation{" "}
          </h2>
          <p className="text-[13px] text-gray-500  leading-relaxed ">
            If you have any questions/complaints/consultations regarding the
            privacy policy, please contact the privacy department 'Data
            Protection & Privacy'{" "}
            <span className="text-white underline">(Contact)</span>.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h2 className="text-lg font-semibold">Additional policies</h2>
          <p className="text-[13px] text-gray-500  leading-relaxed ">
            By connecting any account to PRISM Live Studio you agree to privacy
            policies of the corresponding media or social network platform.
            <br />
            PRISM Live Studio uses the YouTube API Services. <br />
            <ul className="list-disc ml-4  leading-relaxed ">
              <li>
                YouTube :{" "}
                <span className="text-white underline">Terms of Service </span>,
                <span className="text-white underline">
                  Google Privacy Policy{" "}
                </span>
                ,
                <span className="text-white underline">
                  YouTube API Services
                </span>
              </li>
            </ul>
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h2 className="text-lg font-semibold">Coverage</h2>
          <p className="text-[13px] text-gray-500  leading-relaxed ">
            With regard to the collection of personal information by other
            business operators from the link page in the services etc., this
            can’t be covered by the privacy policy.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h2 className="text-lg font-semibold">
            Revision of the privacy policy
          </h2>
          <p className="text-[13px] text-gray-500  leading-relaxed ">
            If there is any addition, deletion or modification to the current
            contents of the privacy policy, users will be notified through the
            “Bulletin board” beginning seven (7) days prior to the revision.
            However, if there is a significant modification to the user’s rights
            such as collecting and use, and the supply of personal information
            to a third party etc., users will be notified at least thirty (30)
            days before it goes into effect.
            <br />
            Privacy Policy announced on February 21, 2024
            <br />
            Privacy Policy enforced on February 28, 2024
            <br />
            <span className="text-white underline">
              See previous version of Privacy Policy (November 20, 2023 ~
              February 27, 2024)
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default privacy;
