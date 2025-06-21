"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";

const PrivacyPolicy = () => {
  const { theme } = useTheme();

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div
      className={`min-h-screen py-20 px-4 sm:px-6 lg:px-8 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true }}
        >
          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Privacy Policy
          </motion.h1>
          <motion.p variants={item} className="text-xl max-w-3xl mx-auto">
            Last Updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </motion.p>
        </motion.div>

        <motion.div
          className="prose lg:prose-xl max-w-none"
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true }}
        >
          <motion.section variants={item} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Introduction
            </h2>
            <p>
              QUORTEKHUB (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
              committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you visit our website{" "}
              <Link href="/" className="text-blue-600 hover:underline">
                quortek.cloud
              </Link>
              , including any other media form, media channel, mobile website,
              or mobile application related or connected thereto (collectively,
              the &quot;Site&quot;). Please read this privacy policy carefully.
              If you do not agree with the terms of this privacy policy, please
              do not access the site.
            </p>
            <p className="mt-4">
              We reserve the right to make changes to this Privacy Policy at any
              time and for any reason. We will alert you about any changes by
              updating the &quot;Last Updated&quot; date of this Privacy Policy.
              You are encouraged to periodically review this Privacy Policy to
              stay informed of updates. You will be deemed to have been made
              aware of, will be subject to, and will be deemed to have accepted
              the changes in any revised Privacy Policy by your continued use of
              the Site after the date such revised Privacy Policy is posted.
            </p>
          </motion.section>

          <motion.section variants={item} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Collection of Your Information
            </h2>
            <p>
              We may collect information about you in a variety of ways. The
              information we may collect on the Site includes:
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Personal Data</h3>
            <p>
              Personally identifiable information, such as your name, shipping
              address, email address, and telephone number, and demographic
              information, such as your age, gender, hometown, and interests,
              that you voluntarily give to us when you register with the Site or
              when you choose to participate in various activities related to
              the Site, such as online chat and message boards. You are under no
              obligation to provide us with personal information of any kind,
              however your refusal to do so may prevent you from using certain
              features of the Site.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Derivative Data</h3>
            <p>
              Information our servers automatically collect when you access the
              Site, such as your IP address, your browser type, your operating
              system, your access times, and the pages you have viewed directly
              before and after accessing the Site. If you are using our mobile
              application, this information may also include your device name
              and type, your operating system, your phone number, your country,
              your likes and replies to a post, and other interactions with the
              application and other users via server log files, as well as any
              other information you choose to provide.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Financial Data</h3>
            <p>
              Financial information, such as data related to your payment method
              (e.g. valid credit card number, card brand, expiration date) that
              we may collect when you purchase, order, return, exchange, or
              request information about our services from the Site. We store
              only very limited, if any, financial information that we collect.
              Otherwise, all financial information is stored by our payment
              processor, and you are encouraged to review their privacy policy
              and contact them directly for responses to your questions.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Mobile Device Data</h3>
            <p>
              Device information, such as your mobile device ID, model, and
              manufacturer, and information about the location of your device,
              if you access the Site from a mobile device.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Third-Party Data</h3>
            <p>
              Information from third parties, such as personal information or
              network friends, if you connect your account to the third party
              and grant the Site permission to access this information.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">
              Data From Contests, Giveaways, and Surveys
            </h3>
            <p>
              Personal and other information you may provide when entering
              contests or giveaways and/or responding to surveys.
            </p>
          </motion.section>

          <motion.section variants={item} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Use of Your Information
            </h2>
            <p>
              Having accurate information about you permits us to provide you
              with a smooth, efficient, and customized experience. Specifically,
              we may use information collected about you via the Site to:
            </p>
            <ul className="list-disc pl-8 mt-4 space-y-2">
              <li>Administer sweepstakes, promotions, and contests.</li>
              <li>Assist law enforcement and respond to subpoena.</li>
              <li>
                Compile anonymous statistical data and analysis for use
                internally or with third parties.
              </li>
              <li>Create and manage your account.</li>
              <li>
                Deliver targeted advertising, coupons, newsletters, and other
                information regarding promotions and the Site to you.
              </li>
              <li>Email you regarding your account or order.</li>
              <li>Enable user-to-user communications.</li>
              <li>
                Fulfill and manage purchases, orders, payments, and other
                transactions related to the Site.
              </li>
              <li>
                Generate a personal profile about you to make future visits to
                the Site more personalized.
              </li>
              <li>Increase the efficiency and operation of the Site.</li>
              <li>
                Monitor and analyze usage and trends to improve your experience
                with the Site.
              </li>
              <li>Notify you of updates to the Site.</li>
              <li>
                Offer new products, services, mobile applications, and/or
                recommendations to you.
              </li>
              <li>Perform other business activities as needed.</li>
              <li>
                Prevent fraudulent transactions, monitor against theft, and
                protect against criminal activity.
              </li>
              <li>Process payments and refunds.</li>
              <li>
                Request feedback and contact you about your use of the Site.
              </li>
              <li>Resolve disputes and troubleshoot problems.</li>
              <li>Respond to product and customer service requests.</li>
              <li>Send you a newsletter.</li>
              <li>Solicit support for the Site.</li>
            </ul>
          </motion.section>

          {/* Continue with all other sections... */}
          <motion.section variants={item} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Disclosure of Your Information
            </h2>
            <p>
              We may share information we have collected about you in certain
              situations. Your information may be disclosed as follows:
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">
              By Law or to Protect Rights
            </h3>
            <p>
              If we believe the release of information about you is necessary to
              respond to legal process, to investigate or remedy potential
              violations of our policies, or to protect the rights, property,
              and safety of others, we may share your information as permitted
              or required by any applicable law, rule, or regulation. This
              includes exchanging information with other entities for fraud
              protection and credit risk reduction.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">
              Third-Party Service Providers
            </h3>
            <p>
              We may share your information with third parties that perform
              services for us or on our behalf, including payment processing,
              data analysis, email delivery, hosting services, customer service,
              and marketing assistance.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">
              Marketing Communications
            </h3>
            <p>
              With your consent, or with an opportunity for you to withdraw
              consent, we may share your information with third parties for
              marketing purposes, as permitted by law.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">
              Interactions with Other Users
            </h3>
            <p>
              If you interact with other users of the Site, those users may see
              your name, profile photo, and descriptions of your activity,
              including sending invitations to other users, chatting with other
              users, liking posts, following blogs.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Online Postings</h3>
            <p>
              When you post comments, contributions or other content to the
              Site, your posts may be viewed by all users and may be publicly
              distributed outside the Site in perpetuity.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">
              Third-Party Advertisers
            </h3>
            <p>
              We may use third-party advertising companies to serve ads when you
              visit the Site. These companies may use information about your
              visits to the Site and other websites that are contained in web
              cookies in order to provide advertisements about goods and
              services of interest to you.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Affiliates</h3>
            <p>
              We may share your information with our affiliates, in which case
              we will require those affiliates to honor this Privacy Policy.
              Affiliates include our parent company and any subsidiaries, joint
              venture partners or other companies that we control or that are
              under common control with us.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Business Partners</h3>
            <p>
              We may share your information with our business partners to offer
              you certain products, services or promotions.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Other Third Parties</h3>
            <p>
              We may share your information with advertisers and investors for
              the purpose of conducting general business analysis. We may also
              share your information with such third parties for marketing
              purposes, as permitted by law.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Sale or Bankruptcy</h3>
            <p>
              If we reorganize or sell all or a portion of our assets, undergo a
              merger, or are acquired by another entity, we may transfer your
              information to the successor entity. If we go out of business or
              enter bankruptcy, your information would be an asset transferred
              or acquired by a third party. You acknowledge that such transfers
              may occur and that the transferee may decline honor commitments we
              made in this Privacy Policy.
            </p>
          </motion.section>

          {/* Continue with additional sections... */}
          <motion.section variants={item} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Tracking Technologies
            </h2>
            <h3 className="text-xl font-bold mt-6 mb-3">
              Cookies and Web Beacons
            </h3>
            <p>
              We may use cookies, web beacons, tracking pixels, and other
              tracking technologies on the Site to help customize the Site and
              improve your experience. When you access the Site, your personal
              information is not collected through the use of tracking
              technology. Most browsers are set to accept cookies by default.
              You can remove or reject cookies, but be aware that such action
              could affect the availability and functionality of the Site. You
              may not decline web beacons. However, they can be rendered
              ineffective by declining all cookies or by modifying your web
              browser&apos;s settings to notify you each time a cookie is
              tendered, permitting you to accept or decline cookies on an
              individual basis.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Website Analytics</h3>
            <p>
              We may also partner with selected third-party vendors, such as
              Google Analytics, to allow tracking technologies and remarketing
              services on the Site through the use of first party cookies and
              third-party cookies, to, among other things, analyze and track
              users&apos; use of the Site, determine the popularity of certain
              content and better understand online activity. By accessing the
              Site, you consent to the collection and use of your information by
              these third-party vendors. You are encouraged to review their
              privacy policy and contact them directly for responses to your
              questions. We do not transfer personal information to these
              third-party vendors. However, if you do not want any information
              to be collected and used by tracking technologies, you can visit
              the third-party vendor or the Network Advertising Initiative
              Opt-Out Tool or Digital Advertising Alliance Opt-Out Tool.
            </p>
          </motion.section>

          {/* Continue with more sections... */}
          <motion.section variants={item} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Third-Party Websites
            </h2>
            <p>
              The Site may contain links to third-party websites and
              applications of interest, including advertisements and external
              services, that are not affiliated with us. Once you have used
              these links to leave the Site, any information you provide to
              these third parties is not covered by this Privacy Policy, and we
              cannot guarantee the safety and privacy of your information.
              Before visiting and providing any information to any third-party
              websites, you should inform yourself of the privacy policies and
              practices (if any) of the third party responsible for that
              website, and should take those steps necessary to, in your
              discretion, protect the privacy of your information. We are not
              responsible for the content or privacy and security practices and
              policies of any third parties, including other sites, services or
              applications that may be linked to or from the Site.
            </p>
          </motion.section>

          <motion.section variants={item} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Security of Your Information
            </h2>
            <p>
              We use administrative, technical, and physical security measures
              to help protect your personal information. While we have taken
              reasonable steps to secure the personal information you provide to
              us, please be aware that despite our efforts, no security measures
              are perfect or impenetrable, and no method of data transmission
              can be guaranteed against any interception or other type of
              misuse. Any information disclosed online is vulnerable to
              interception and misuse by unauthorized parties. Therefore, we
              cannot guarantee complete security if you provide personal
              information.
            </p>
          </motion.section>

          <motion.section variants={item} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Policy for Children
            </h2>
            <p>
              We do not knowingly solicit information from or market to children
              under the age of 13. If you become aware of any data we have
              collected from children under age 13, please contact us using the
              contact information provided below.
            </p>
          </motion.section>

          <motion.section variants={item} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Controls for Do-Not-Track Features
            </h2>
            <p>
              Most web browsers and some mobile operating systems include a
              Do-Not-Track (&apos;DNT&apos;) feature or setting you can activate
              to signal your privacy preference not to have data about your
              online browsing activities monitored and collected. No uniform
              technology standard for recognizing and implementing DNT signals
              has been finalized. As such, we do not currently respond to DNT
              browser signals or any other mechanism that automatically
              communicates your choice not to be tracked online. If a standard
              for online tracking is adopted that we must follow in the future,
              we will inform you about that practice in a revised version of
              this Privacy Policy.
            </p>
          </motion.section>

          <motion.section variants={item} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Options Regarding Your Information
            </h2>
            <h3 className="text-xl font-bold mt-6 mb-3">Account Information</h3>
            <p>
              You may at any time review or change the information in your
              account or terminate your account by:
            </p>
            <ul className="list-disc pl-8 mt-4 space-y-2">
              <li>
                Logging into your account settings and updating your account
              </li>
              <li>
                Contacting us using the contact information provided below
              </li>
            </ul>
            <p className="mt-4">
              Upon your request to terminate your account, we will deactivate or
              delete your account and information from our active databases.
              However, some information may be retained in our files to prevent
              fraud, troubleshoot problems, assist with any investigations,
              enforce our Terms of Use and/or comply with legal requirements.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">
              Emails and Communications
            </h3>
            <p>
              If you no longer wish to receive correspondence, emails, or other
              communications from us, you may opt-out by:
            </p>
            <ul className="list-disc pl-8 mt-4 space-y-2">
              <li>
                Noting your preferences at the time you register your account
                with the Site
              </li>
              <li>
                Logging into your account settings and updating your preferences
              </li>
              <li>
                Contacting us using the contact information provided below
              </li>
              <li>Using the unsubscribe link in the footer of any email</li>
            </ul>
            <p className="mt-4">
              If you no longer wish to receive correspondence, emails, or other
              communications from third parties, you are responsible for
              contacting the third party directly.
            </p>
          </motion.section>

          <motion.section variants={item} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              California Privacy Rights
            </h2>
            <p>
              California Civil Code Section 1798.83, also known as the
              &apos;Shine The Light&apos; law, permits our users who are
              California residents to request and obtain from us, once a year
              and free of charge, information about categories of personal
              information (if any) we disclosed to third parties for direct
              marketing purposes and the names and addresses of all third
              parties with which we shared personal information in the
              immediately preceding calendar year. If you are a California
              resident and would like to make such a request, please submit your
              request in writing to us using the contact information provided
              below.
            </p>
            <p className="mt-4">
              If you are under 18 years of age, reside in California, and have a
              registered account with the Site, you have the right to request
              removal of unwanted data that you publicly post on the Site. To
              request removal of such data, please contact us using the contact
              information provided below, and include the email address
              associated with your account and a statement that you reside in
              California. We will make sure the data is not publicly displayed
              on the Site, but please be aware that the data may not be
              completely or comprehensively removed from our systems.
            </p>
          </motion.section>

          <motion.section variants={item} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy,
              please contact us at:
            </p>
            <p className="mt-4">
              QUORTEK
              <br />
              28 Choba Road
              <br />
              Port Harcourt, Rivers State
              <br />
              Nigeria
              <br />
              Phone: +234 915 982 2561
            </p>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
