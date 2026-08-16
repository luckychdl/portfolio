import SectionHeading from "../_components/sectionHeading";
import ContactList from "../_widgets/contact/ui/contactList";

export default function Contact() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col justify-center lg:min-h-[calc(100dvh-14rem)]">
      <SectionHeading
        eyebrow="Contact"
        title="함께 만들어요"
        description="제안이나 궁금한 점이 있다면 편하게 연락 주세요."
        index="04"
      />
      <ContactList />
    </div>
  );
}
