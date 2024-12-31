let comments = []; 

export default function handler(req, res) {
  if (req.method === 'POST') {
    const newComment = req.body;
    comments.push(newComment);
    return res.status(201).json(newComment);
  } else if (req.method === 'GET') {
    return res.status(200).json(comments);
  } else {
    return res.status(405).end();
  }
}