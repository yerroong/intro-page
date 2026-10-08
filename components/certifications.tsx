import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Certifications() {
  const certifications = [
    {
      name: "데이터분석준전문가(ADsP)",
      issuer: "한국데이터산업진흥원장",
      date: "25.03.21",
    },
    {
      name: "토익스피킹(TOEIC Speaking) IM2",
      issuer: "한국TOEIC위원회",
      date: "26.10.04",
    },
  ]

  return (
    <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
      <CardContent className="p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>자격증/교육명</TableHead>
              <TableHead>발급기관</TableHead>
              <TableHead>발급일</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {certifications.map((cert, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{cert.name}</TableCell>
                <TableCell>{cert.issuer}</TableCell>
                <TableCell>{cert.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
