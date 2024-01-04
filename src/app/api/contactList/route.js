import { NextResponse } from "next/server";
import * as fs from "fs";

export async function POST(req, res) {
    try {
        let responseData;
        if (req.method === 'POST') {
            try {
                let body = await req.json();
                // console.log(req.body);
                let data = await fs.promises.readdir('contactdata');
                // console.log(data, req.body, body);
                responseData = await fs.promises.writeFile(`contactdata/${data.length + 1}.json`, JSON.stringify(body))
                console.log(responseData);
                return NextResponse.json(
                    { message: "Your contact details", data: body },
                    { status: 200 }
                );
            } catch (error) {
                return NextResponse.json(
                    { message: "Your contact details not found" },
                    { status: 404 }
                );
            }
        } else {
            return NextResponse.json(
                { message: "Bad request" },
                { status: 400 }
            );
        }

    } catch (error) {
        return NextResponse.json(
            { message: "Internal Server error" },
            { status: 500 }
        );
    }
}

