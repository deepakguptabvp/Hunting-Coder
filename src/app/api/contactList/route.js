import { NextResponse } from "next/server";
import * as fs from "fs";
import tmp from "tmp";

export async function POST(req, res) {
    try {
        let responseData;
        if (req.method === "POST") {
            try {
                console.log("123456789");
                let body = await req.json();

                let path = process.cwd() + "/src/app/api/contactList/contactdata";
                console.log("123456789", path);

                let data = await fs.promises.readdir(path);
                console.log("123456789", data);

                const { name: tmpFileName, fd: tmpFileDescriptor } = tmp.fileSync();
                let result = await fs.promises.writeFile(tmpFileName, JSON.stringify(body));

                // responseData = await fs.promises.writeFile(`/${new Date().getTime()}.json`, JSON.stringify(body));
                console.log("123456789", result);

                return NextResponse.json(
                    { message: "Your contact details", data: body, success: true },
                    { status: 200 }
                );
            } catch (error) {
                return NextResponse.json(
                    { message: "Your contact details not found" },
                    { status: 404 }
                );
            }
        } else {
            return NextResponse.json({ message: "Bad request" }, { status: 400 });
        }
    } catch (error) {
        return NextResponse.json(
            { message: "Internal Server error" },
            { status: 500 }
        );
    }
}
