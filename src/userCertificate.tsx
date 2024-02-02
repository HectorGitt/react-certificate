import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FrameImage from "assets/frame.png";
import LineSvg from "assets/icons/Line.svg";
import Signature from "assets/signature.png";
import { format } from "date-fns";
import { useMemo } from "react";

import { SerializedTextEditorField } from "@/components/TextEditorField";

const CertificateWrapper = styled(Box)(() => ({
  backgroundColor: "#ffffff",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  width: "100%"
}));

const OverlapWrapper = styled(Box)(() => ({
  backgroundColor: "#ffffff",
  height: "612px",
  overflow: "hidden",
  width: "792px"
}));

const Overlap = styled(Box)(() => ({
  height: "1180px",
  left: "-578px",
  position: "relative",
  top: "34px",
  width: "1330px"
}));

const StampImage = styled("img")(() => ({
  height: "165px",
  left: "891px",
  position: "absolute",
  top: "399px",
  width: "167px"
}));

const DateWrapper = styled(Box)(() => ({
  height: "51px",
  left: "696px",
  position: "absolute",
  top: "431px",
  width: "152px"
}));

const DateTitleText = styled(Box)(({ theme }) => ({
  borderColor: theme.palette.secondary.main,
  color: theme.palette.secondary.main,
  fontSize: "13px",
  fontWeight: 400,
  left: "57px",
  letterSpacing: 0,
  lineHeight: "normal",
  position: "absolute",
  top: "33px",
  whiteSpace: "nowrap"
}));

const LineImage = styled("img")(() => ({
  height: "1px",
  left: "0",
  objectFit: "cover",
  position: "absolute",
  top: "25px",
  width: "149px"
}));

const DateText = styled(Box)(({ theme }) => ({
  borderColor: theme.palette.secondary.main,
  color: theme.palette.secondary.main,
  fontSize: "15px",
  fontWeight: 400,
  left: "9px",
  letterSpacing: 0,
  lineHeight: "normal",
  position: "absolute",
  top: "0",
  whiteSpace: "nowrap"
}));

const SignatureWrapper = styled(Box)(() => ({
  height: "78px",
  left: "1100px",
  position: "absolute",
  top: "419px",
  width: "161px"
}));

const OverlapGroup = styled(Box)(() => ({
  height: "34px",
  left: "18px",
  position: "absolute",
  top: "45px",
  width: "122px"
}));

const Line2Img = styled("img")(() => ({
  height: "1px",
  left: "4px",
  objectFit: "cover",
  position: "absolute",
  top: "36px",
  width: "149px"
}));

const DigitalSignature = styled("img")(() => ({
  height: "34px",
  left: "0",
  objectFit: "cover",
  position: "absolute",
  top: "0",
  width: "157px"
}));

const Group = styled(Box)(() => ({
  height: "158px",
  left: "738px",
  position: "absolute",
  top: "218px",
  width: "478px"
}));

const NameText = styled(Box)(() => ({
  color: "#3EB7EC",
  fontFamily: "Tobias-Regular, Helvetica",
  fontSize: "54px",
  fontWeight: 400,
  alignItems: "center",
  textAlign: "center",
  letterSpacing: 0,
  lineHeight: "54px",
  position: "relative",
  top: "24px",
  whiteSpace: "nowrap"
}));

const ContentText = styled("p")(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: "12px",
  fontWeight: 400,
  left: "32px",
  letterSpacing: 0,
  lineHeight: "20.4px",
  position: "absolute",
  textAlign: "center",
  top: "90px",
  width: "407px"
}));

const ContentTitle = styled(Box)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: "20px",
  fontWeight: 500,
  left: "134px",
  letterSpacing: 0,
  lineHeight: "20px",
  position: "absolute",
  top: "0",
  whiteSpace: "nowrap"
}));

const TitleGroup = styled(Box)(() => ({
  height: "132px",
  left: "767px",
  position: "absolute",
  top: "43px",
  width: "417px"
}));

const AchievementText = styled(Box)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontFamily: "Tobias-Bold, Helvetica",
  fontSize: "66px",
  fontWeight: 700,
  left: "0",
  letterSpacing: 0,
  lineHeight: "66px",
  position: "absolute",
  top: "66px",
  whiteSpace: "nowrap"
}));

const SignatureText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: "15px",
  fontWeight: 700,
  lineHeight: "normal"
}));

const SubSignatureText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: "13px",
  fontWeight: 400,
  lineHeight: "normal"
}));

const CertificateText = styled(Box)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontFamily: "Tobias",
  fontSize: "66px",
  fontWeight: 300,
  left: "26px",
  letterSpacing: 0,
  lineHeight: "66px",
  position: "absolute",
  top: "0",
  whiteSpace: "nowrap"
}));

const FrameWrapper = styled("img")(() => ({
  height: "544px",
  left: "619px",
  position: "absolute",
  top: "0",
  width: "711px"
}));

interface UserCertificateProps {
  user_name: string;
  date: string;
  description: string;
  stamp_url: string;
}

export const UserCertificate: React.FC<UserCertificateProps> = ({
  user_name,
  date,
  description,
  stamp_url
}) => {
  const formattedDate = useMemo(
    () => format(new Date(date), "MMMM dd, yyyy"),
    [date]
  );
  return (
    <CertificateWrapper>
      <OverlapWrapper>
        <Overlap>
          <TitleGroup>
            <CertificateText>Certificate of</CertificateText>
            <AchievementText>Achievement</AchievementText>
          </TitleGroup>
          <FrameWrapper alt="Frame" src={FrameImage.src} />

          <Group>
            <ContentTitle>Proudly Presented To</ContentTitle>
            <NameText>{user_name}</NameText>
            <ContentText>
              <SerializedTextEditorField defaultValue={description} />
            </ContentText>
          </Group>
          <DateWrapper>
            <DateTitleText>Date</DateTitleText>
            <LineImage alt="Vector" src={LineSvg.src} />
            <DateText>{formattedDate}</DateText>
          </DateWrapper>
          <SignatureWrapper>
            <OverlapGroup>
              <SignatureText>Alan Altman, MD</SignatureText>
              <SubSignatureText>CEO Protoqual</SubSignatureText>
            </OverlapGroup>
            <Line2Img alt="Vector" src={LineSvg.src} />
            <DigitalSignature alt="Signature" src={Signature.src} />
          </SignatureWrapper>
          <StampImage alt="Sello" src={stamp_url} />
        </Overlap>
      </OverlapWrapper>
    </CertificateWrapper>
  );
};
