let discussions = []; // Tableau pour stocker les discussions en mémoire

export default function handler(req, res) {
  if (req.method === 'POST') {
    const newDiscussion = req.body;
    discussions.push(newDiscussion); // Ajouter la nouvelle discussion
    return res.status(201).json(newDiscussion);
  } else if (req.method === 'GET') {
    return res.status(200).json(discussions); // Retourner toutes les discussions
  } else {
    return res.status(405).end(); // Méthode non autorisée
  }
}