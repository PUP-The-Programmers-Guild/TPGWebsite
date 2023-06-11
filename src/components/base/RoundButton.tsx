interface IRoundButtonProps {
  url: string;
  text: string;
}

export default function RoundButton(props: IRoundButtonProps) {
  const { url, text } = props;

  return (
    <a
      className="rounded-full bg-[#11423f] px-14 py-4 font-body text-2xl text-white"
      href={url}
    >
      {text}
    </a>
  );
}
