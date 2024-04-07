import Wrapper from "@/components/animation-wrapper/Wrapper";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <Wrapper>
      <MaxWidthWrapper> 
        <div className="py-10 lg:pt-24 flex flex-col gap-10">
          <div>
            <p className="text-xl font-semibold text-center underline">
              Imprint and Data protection
            </p>

            <p className="text-xl font-medium text-center py-4">Imprint</p>
            <p className="text-xl font-light py-4">According to § 5 TMG:</p>
            <p className="text-xl font-medium py-2">C@G Recruting UG</p>
            <p className="text-xl font-light pb-2">
              Blumenstraße 8, <br /> 88444, Ummendorf, <br /> Germany. <br />
            </p>
            <p className="text-xl font-medium">Contact</p>
            <p className="text-xl font-light">
              Telephone: +49 15 14 20 53 907 <br />
              Email: careeratgermanyrecruiting@gmail.com
            </p>
            <p className="text-xl font-medium mt-6">Liability for content</p>
            <p className="text-xl font-light">
              As a service provider, we are responsible for our own content on
              these pages in accordance with general laws in accordance with
              Section 7 Paragraph 1 TMG. However, according to Sections 8 to 10
              TMG, as a service provider we are not obliged to monitor
              transmitted or stored third-party information or to investigate
              circumstances that indicate illegal activity. 
              
                 Obligations to remove or block the use of information in
                accordance with general law remain unaffected. However,
                liability in this regard is only possible from the time of
                knowledge of a specific legal violation. If we become aware of
                any corresponding legal violations, we will immediately remove
                this content.
              
            </p>

            <p className="text-xl font-medium mt-6">Liability for links</p>
            <p className="text-xl font-light">
              Our website contains links to external third-party websites over
              whose content we have no influence. We therefore cannot assure any
              liability for this external content. The respective provider or
              operator of the pages is always responsible for the content of the
              linked pages. The linked pages were checked for possible legal
              violations at the time of linking. Illegal content was not
              apparent at the time of linking. 
              
                  However, permanent control of the content of the linked pages is
                unreasonable without concrete evidence of a legal violation. If
                we become aware of any legal violations, we will immediately
                remove such links.
              
            </p>

            <p className="text-xl font-medium mt-6">Dispute resolution</p>
            <p className="text-xl font-light">
              We are not willing or obliged to take part in dispute resolution
              proceedings before a consumer arbitration board.
            </p>

            <p className="text-xl font-medium mt-6">Copyright</p>
            <p className="text-xl font-light">
              The content and works on these pages created by the site operators
              are subject to German copyright law. Reproduction, processing,
              distribution and any kind of exploitation outside the limits of
              copyright law require the written consent of the respective author
              or creator. Downloads and copies of this page are only permitted
              for private, non-commercial use.
              
                If the content on this site was not created by the operator, the
                copyrights of third parties are respected. In particular
                contents of third parties are marked as such. Should you
                nevertheless become aware of a copyright infringement, we ask
                that you notify us accordingly. If we become aware of any legal
                violations, we will immediately remove such content.
              
            </p>
          </div>
          {/* Data protection */}
          <div className="flex flex-col gap-6">
            <p className="text-xl font-medium text-center">Data protection</p>

            <p className="text-xl font-light">
              The operators of these pages take the protection of your personal
              data very seriously. We treat your personal data confidentially
              and in accordance with the statutory data protection regulations
              and this data protection declaration.
              
                It is generally possible to use our website without providing
                any personal data. As far as personal data (e.g. name, address
                or e-mail addresses) is collected on our pages, this is always
                done on a voluntary basis, as far as possible. This data will
                not be passed on to third parties without your express consent.
              
              
                We would like to point out that data transmission over the
                Internet (e.g. when communicating via email) can have security
                gaps. Complete protection of data from access by third parties
                is not possible.
              
            </p>

            <div>
              <p className="text-xl font-medium">Cookies</p>
              <p className="text-xl font-light">
                Some of the websites use so-called cookies. Cookies do not cause
                any damage to your computer and do not contain viruses. Cookies
                serve to make our offering more user-friendly, effective and
                secure. Cookies are small text files that are stored on your
                computer and that your browser saves. Most of the cookies we use
                are so-called “session cookies”. They are automatically deleted
                after your visit. Other cookies remain stored on your device
                until you delete them. These cookies enable us to recognize your
                browser the next time you visit.
                
                  You can set your browser so that you are informed about the
                  setting of cookies and only allow cookies in individual cases,
                  exclude the acceptance of cookies for certain cases or in
                  general, and activate the automatic deletion of cookies when
                  closing the browser. If cookies are deactivated, the
                  functionality of this website may be restricted.
                
              </p>
            </div>

            <div>
              <p className="text-xl font-medium">
                Contact form/preliminary check/submission forms
              </p>
              <p className="text-xl font-light">
                If you send us inquiries using the contact form, your details
                from the inquiry form, including the contact details you
                provided there, will be stored by us for the purpose of
                processing the inquiry and in the event of follow-up questions.
                We will not pass on this data without your consent.
              </p>
            </div>

            <div>
              <p className="text-xl font-medium">Zoom</p>
              <p className="text-xl font-light">
                Data protection information for online meetings, telephone
                conferences and webinars via “Zoom” from C@G Recruting UG. We would like to inform you below about the
                processing of personal data in connection with the use of
                “Zoom”. We use the “Zoom” tool to conduct telephone conferences,
                online meetings, video conferences and/or webinars (hereinafter:
                “online meetings”). “Zoom” is a service of Zoom Video
                Communications, Inc., which is based in the USA. C@G Recruiting UG is responsible for data processing that is
                directly related to the implementation of “online meetings”. If
                you access the “Zoom” website, the “Zoom” provider is
                responsible for data processing. However, to use “Zoom”, you
                only need to visit the website to download the software for
                using “Zoom”. You can also use “Zoom” if you enter the
                respective meeting ID and, if necessary, other access data for
                the meeting directly in the “Zoom” app. If you do not want to or
                cannot use the “Zoom” app, the basic functions can also be used
                via a browser version, which you can also find on the “Zoom”
                website. When using “Zoom” different types of data are
                processed. The extent of the data also depends on what data
                information you provide before or when participating in an
                “online meeting”. Which data is processed? The following
                personal data are subject to processing:{" "}
                <span className="font-semibold">User information: </span>
                 first name, last name, telephone (optional), email address,
                password (if “single sign-on” is not used), profile picture
                (optional),{" "}
                <span className="font-semibold"> meeting metadata :</span>{" "}
                Topic, description (optional), subscriber IP addresses,
                device/hardware information.{" "}
                <span className="font-semibold">
                  For recordings (optional):
                </span>{" "}
                MP4 file of all video, audio and presentation recordings, M4A
                file of all audio recordings, text file of the online meeting
                chat.{" "}
                <span className="font-semibold">
                  When dialing in with the telephone:{" "}
                </span>{" "}
                information about the incoming and outgoing phone number,
                country name, start and end time. If necessary, additional
                connection data such as the IP address of the device can be
                saved.
                <span className="font-semibold">
                  Text, audio and video data:
                </span>{" "}
                You may have the opportunity to use the chat, question or survey
                functions in an “online meeting”. In this respect, the text
                entries you make will be processed in order to display them in
                the “online meeting” and, if necessary, to record them. In order
                to enable the display of video and the playback of audio, the
                data from the microphone of your device and any video camera on
                the device are processed for the duration of the meeting. You
                can switch off or mute the camera or microphone at any time
                using the “Zoom” applications. In order to take part in an
                “online meeting” or enter the “meeting room”, you must at least
                provide information about your name.{" "}
                <span className="font-semibold">Scope of processing:</span> We
                use “Zoom” to conduct “online meetings”. If we want to record
                “online meetings”, we will inform you transparently in advance
                and - if necessary - ask for your consent. The fact of the
                recording will also be displayed to you in the “Zoom” app. If
                necessary for the purposes of logging the results of an online
                meeting, we will log the chat content. However, this will
                usually not be the case. In the case of webinars, we can also
                process the questions asked by webinar participants for the
                purposes of recording and following up on webinars. If you are
                registered as a user with “Zoom”, then reports about “online
                meetings” (meeting metadata, telephone dial-in data, questions
                and answers in webinars, poll function in webinars) can be
                stored with “Zoom” for up to one month. The option of
                software-based “attention monitoring” (“attention tracking”) in
                “online meeting” tools such as “Zoom” is deactivated. Automated
                decision-making within the meaning of Art. 22 GDPR is not used.{" "}
                <span className="font-semibold">
                  Legal basis for data processing:
                </span>{" "}
                As far as personal data of C@G Recruting UG employees is
                processed, Section 26 BDSG is the legal basis for data
                processing. If, in connection with the use of “Zoom”, personal
                data is not necessary for the establishment, implementation or
                termination of the employment relationship, but is nevertheless
                an elementary part of the use of “Zoom”, then Art. 6 Para. 1
                lit. f) GDPR the legal basis for data processing. In these
                cases, our interest is in the effective implementation of
                “online meetings”. Furthermore, the legal basis for data
                processing when conducting “online meetings” is Article 6
                Paragraph 1 Letter b) GDPR, insofar as the meetings are carried
                out within the framework of contractual relationships. If there
                is no contractual relationship, the legal basis is Article 6
                Paragraph 1 Letter f) GDPR. Here, too, we are interested in the
                effective implementation of “online meetings”.
                <span className="font-semibold">
                  {" "}
                  Recipients / transfer of data :
                </span>{" "}
                Personal data that is processed in connection with participation
                in “online meetings” will generally not be passed on to third
                parties unless they are specifically intended to be passed on.
                Please note that content from “online meetings” as well as
                personal meetings are often used to communicate information with
                customers, interested parties or third parties and are therefore
                intended to be passed on. Other recipients: The provider of
                “Zoom” necessarily receives knowledge of the above-mentioned
                data, insofar as this is provided for within the framework of
                our order processing agreement with “Zoom”. “Zoom” is a service
                provided by a provider from the USA. Processing of personal data
                also takes place in a third country. We have concluded an order
                processing agreement with the provider of “Zoom” that meets the
                requirements of Art. 28 GDPR. An appropriate level of data
                protection is guaranteed on the one hand by the “Privacy Shield”
                certification of Zoom Video Communications, Inc., but also by
                the conclusion of the so-called EU standard contractual clauses.
                You have the right to information about the personal data
                concerning you. You can contact us at any time for information.
                If you request information that is not made in writing, please
                understand that we may require you to provide evidence that you
                are who you say you are. You also have the right to correction
                or deletion or to restriction of processing, to the extent that
                you are entitled to this by law. Finally, you have the right to
                object to processing within the framework of the legal
                requirements. A right toData portability also exists within the
                framework of data protection regulations.{" "}
                <span className="font-semibold">Deletion of data :</span> We
                generally delete personal data if there is no need for further
                storage. A requirement may exist in particular if the data is
                still needed to fulfill contractual services, to check and grant
                or ward off warranty and, if applicable, guarantee claims. In
                the case of statutory retention obligations, deletion will only
                be considered after the respective retention obligation has
                expired.{" "}
                <span className="font-semibold">
                  Right to complain to a supervisory authority :
                </span>{" "}
                You have the right to complain to a data protection supervisory
                authority about our processing of personal data .{" "}
                <span className="font-semibold">
                  Changes to this data protection notice :
                </span>{" "}
                We will revise this data protection notice in the event of
                changes to data processing or other occasions that make this
                necessary. You can always find the current version on this
                website. As of: March 26, 2020
              </p>
            </div>

            <div>
              <p className="text-xl font-medium">Facebook</p>
              <p className="text-xl font-light">
                Plugins from the social network Facebook, provider Facebook
                Inc., 1 Hacker Way, Menlo Park, California 94025, USA, are
                integrated into our pages. You can recognize the Facebook
                plugins by the Facebook logo or the “Like” button on our site.
                You can find an overview of the{" "}
                <Link
                  className="text-blue-600"
                  href={"https://developers.facebook.com/docs/plugins/"}
                  target="_"
                >
                  Facebook plugins here.
                </Link>
                <span>
                  {" "}
                  When you visit our pages, the plugin establishes a direct
                  connection between your browser and the Facebook server.
                  Facebook thereby receives the information that you have
                  visited our site with your IP address. If you click the
                  Facebook “Like” button while you are logged into your Facebook
                  account, you can link the content of our pages to your
                  Facebook profile. This allows Facebook to assign your visit to
                  our pages to your user account. We would like to point out
                  that as the provider of the pages, we have no knowledge of the
                  content of the transmitted data or its use by Facebook.
                  Further information can be found in Facebook&apos;s data
                  protection declaration at
                  https://de-de.facebook.com/policy.php.
                </span>
                <span>
                  If you do not want Facebook to be able to assign your visit to
                  our pages to your Facebook user account, please log out of
                  your Facebook user account.
                </span>
              </p>
            </div>

            <div>
              <p className="text-xl font-medium">Instagram</p>
              <p className="text-xl font-light">
                Functions of the Instagram service are integrated into our
                pages. These functions are offered by Instagram Inc., 1601
                Willow Road, Menlo Park, CA, 94025, USA. If you are logged into
                your Instagram account, you can link the content of our pages to
                your Instagram profile by clicking on the Instagram button. This
                allows Instagram to assign your visit to our pages to your user
                account. We would like to point out that as the provider of the
                pages, we have no knowledge of the content of the transmitted
                data or its use by Instagram.
                <span>
                  Further information can be found in
                  <Link
                    className="text-blue-600"
                    target="_"
                    href={"https://instagram.com/about/legal/privacy/"}
                  >
                    {" "}
                    Instagram&apos;s privacy policy.
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <p className="text-xl font-medium">SSL encryption</p>
              <p className="text-xl font-light">
                This site uses SSL encryption for security reasons and to
                protect the transmission of confidential content, such as the
                requests that you send to us as the site operator. You can
                recognize an encrypted connection by the browser address line
                changing from “http://” to “https://” and by the lock symbol in
                your browser line.
                <span>
                  If SSL encryption is activated, the data you transmit to us
                  cannot be read by third parties.{" "}
                </span>
              </p>
            </div>

            <div>
              <p className="text-xl font-medium">
                Right to information, deletion, blocking
              </p>
              <p className="text-xl font-light">
                You have the right at any time to receive free information about
                your stored personal data, its origin and recipient and the
                purpose of data processing, as well as a right to correct, block
                or delete this data. You can contact us at any time at the
                address given in the legal notice for this purpose or for
                further questions on the subject of personal data.
              </p>
            </div>

            <div>
              <p className="text-xl font-medium">
                Objection to advertising emails
              </p>
              <p className="text-xl font-light">
                The use of contact details published as part of the imprint
                obligation to send unsolicited advertising and information
                materials is hereby objected to. The operators of the pages
                expressly reserve the right to take legal action in the event of
                unsolicited advertising information being sent, such as spam
                emails.
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </Wrapper>
  );
};

export default Page;
