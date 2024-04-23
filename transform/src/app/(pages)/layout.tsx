import "@/app/globals.css";
import OnepickHeader from "@/app/_components/onepickheader";

type Props = {
    children: React.ReactNode;
};

export default function OnepickLayout({children}:Props) {
  return (
    <div>
			<OnepickHeader />
			{children}
    </div>
  );
}
