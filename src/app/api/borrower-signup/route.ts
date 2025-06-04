import { NextResponse } from "next/server";
import { borrowerSchema } from "@/lib/schemas";
import { borrowers } from "../../../../db/schema";
import { db } from "../../../../db";
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validation = borrowerSchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json({ message: "Validation Error", errors: validation.error.flatten().fieldErrors }, { status: 400 });
        }
        const borrowerData = validation.data;
        await db.insert(borrowers).values(borrowerData).run();
        console.log("Borrower data saved to database:", borrowerData);
        return NextResponse.json({ message: "Borrower data received successfully!", data: borrowerData }, { status: 200 });
    } catch (error) {
        console.error("Error processing borrower signup:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
