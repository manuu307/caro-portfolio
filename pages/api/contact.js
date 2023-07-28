let nodemailer = require("nodemailer");
// import { PrismaClient } from "@prisma/client";
//const prisma = new PrismaClient();
//
const creds = {
  host: "smtp.gmail.com",
  port: 587,
  user: "valkiriasolutionsmarketing@gmail.com",
  password: "umysfizttfdylkkp",
  info: "ctapia@valkiriasolutions.com"
};
//
async function send(email) {
  //console.log("send:", email);
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: creds.host, //"server477.dinamichosting.com",
    port: creds.port, //587
    secure: creds.port === 465 ? true : false, // true for 465, false for other ports
    auth: {
      user: creds.user,
      pass: creds.password,
    },
  });
  // send mail with defined transport object
  let info = await transporter.sendMail(email).then((res, err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
  console.log(info);
  return info;
}

export default async function contact(req, res) {
if (req.method === "POST") {
    console.log(req.body);
    const emailSent = await send({
        from: creds.user,
        to: creds.info,
        subject: `Mensaje de: ${req.body?.name} (${req.body?.email})`,
        html: req.body?.message || "",
        /* html: req.body?.html || "",  */
      })
      .catch((e) => {
        throw e;
      })
    res.json(emailSent);
  } else {
    res.send(404)
  }
}

// example when using db
/* if (session && req.method === "POST") {
    console.log(req.body);
    const newContract = await prisma.contract
      .create({
        data: {
          name: req.body.name,
          createdAt: req.body.createdAt ? req.body.createdAt : undefined,
          endAt: req.body.endAt ? req.body.endAt : undefined,
          serviceId: req.body.service.id,
          contractTypeId: req.body.contractTypeId,
          organizationId: session.user.orgId,
          customerId: req.body.customerId,
          corporationId: req.body.corporationId,
        },
      })
      .catch((e) => {
        throw e;
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
    res.json(newContract);
  } */