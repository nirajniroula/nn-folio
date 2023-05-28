export default async function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;

  // Optional logging to see the responses in the command line where the
  // Next.js app is running.

  // Guard clause checks for email and returns early if it is not found.
  if (!body.name || !body.email || !body.message) {
    // Sends a HTTP bad request error code.
    return res.status(400).json({
      error: "One or more of the following not found: name, email, message",
    });
  }

  // Here, you could send the message to a service like Supabase to read later.
  //

  try {
    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
    const URL = `https://us1.api.mailchimp.com/3.0/lists/${audienceId}`;
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        Authorization: `auth ${process.env.MAILCHIMP_API_KEY}`,
      },
      body: JSON.stringify(mailChimpData),
    });
    const data = await response.json();
    // Error handling.
    if (data.errors[0]?.error) {
      return res.status(401).json({ error: data.errors[0].error });
    } else {
      res.status(200).json({ success: true });
    }
  } catch (e) {
    res
      .status(401)
      .json({ error: "Something went wrong, please try again later." });
  }

  // This is just an example, so we won't do anything except redirect back to
  // the homepage.

  res.redirect(302, "/");
}
