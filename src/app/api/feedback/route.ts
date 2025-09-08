// src/app/api/feedback/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const email = formData.get('email');
    const message = formData.get('message');

    // In a real application, you would save this to a database,
    // send an email, or post to a Slack channel.
    console.log('Feedback Received:');
    console.log('Email:', email);
    console.log('Message:', message);

    // You must send a response back to the client.
    return NextResponse.json({ message: 'Feedback received successfully!' }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error receiving feedback.' }, { status: 500 });
  }
}