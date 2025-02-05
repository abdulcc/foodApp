import MainHeader from "../components/main-header/main-header";
import GlassmorphismComponent from "./glassmorphism/page";
import "./globals.css";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <GlassmorphismComponent></GlassmorphismComponent> */}
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
