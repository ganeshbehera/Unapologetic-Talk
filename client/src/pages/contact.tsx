import { Layout } from "@/components/layout";
import { PageHeader } from "@/components/page-header";
import { ContactSection } from "@/components/contact-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { SubscribeSection } from "@/components/subscribe-section";

export default function Contact() {
  return (
    <Layout>
      <PageHeader
        label="Get In Touch"
        title="Let's Connect"
        description="Have something to say? Whether it's a collaboration, a topic idea, or just some love for Sherlyn - we'd love to hear from you."
      />
      <ContactSection />
      <NewsletterSection />
      <SubscribeSection />
    </Layout>
  );
}
