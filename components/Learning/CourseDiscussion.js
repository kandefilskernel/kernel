import axios from "axios";


import React, { useEffect, useState } from "react";
const CourseDiscussion = () => {
	const [comments, setComments] = useState([]);
	const [username, setUsername] = useState('');
	const [content, setContent] = useState('');
	const [replyContent, setReplyContent] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (username && content) {
			const newComment = { id: Date.now(), username, content, likes: 0, stickers: [], replies: [] };

			// Simuler une API avec Axios
			try {
				await axios.post('/api/comments', newComment);
				setComments([...comments, newComment]);
				setUsername('');
				setContent('');
			} catch (error) {
				console.error('Erreur lors de l\'envoi du commentaire', error);
			}
		}
	};

	const handleLike = (id) => {
		setComments(comments.map(c =>
			c.id === id ? { ...c, likes: c.likes + 1 } : c
		));
	};

	const handleSticker = (id, sticker) => {
		setComments(comments.map(c =>
			c.id === id ? { ...c, stickers: [...c.stickers, sticker] } : c
		));
	};

	const handleReply = (id) => {
		if (replyContent) {
			setComments(comments.map(c =>
				c.id === id ? { ...c, replies: [...c.replies, { username, content: replyContent }] } : c
			));
			setReplyContent('');
		}
	};



	return (
		<div style={{ padding: '20px' }}>
			<h1>Commentaires sur le Cours</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Votre nom"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					required
					style={{ marginBottom: '10px', padding: '5px', width: '100%' }}
				/>
				<textarea
					placeholder="Votre commentaire"
					value={content}
					onChange={(e) => setContent(e.target.value)}
					required
					style={{ marginBottom: '10px', padding: '5px', width: '100%', height: '100px' }}
				/>
				<button type="submit" style={{ padding: '10px 15px' }}>Envoyer</button>
			</form>
			<div style={{ marginTop: '20px' }}>
				{comments.map((comment) => (
					<div key={comment.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
						<strong>{comment.username}</strong>
						<p>{comment.content}</p>
						<p><strong>Likes:</strong> {comment.likes}</p>
						<button onClick={() => handleLike(comment.id)}>👍 Liker</button>
						<button onClick={() => handleSticker(comment.id, '😊')}>😊 Sticker</button>
						<div>
							{comment.stickers.map((sticker, index) => (
								<span key={index} style={{ margin: '0 5px' }}>{sticker}</span>
							))}
						</div>
						<div>
							<h4>Répondre</h4>
							<textarea
								placeholder="Votre réponse"
								value={replyContent}
								onChange={(e) => setReplyContent(e.target.value)}
								style={{ marginBottom: '10px', padding: '5px', width: '100%', height: '50px' }}
							/>
							<button onClick={() => handleReply(comment.id)}>Répondre</button>
							<div style={{ marginTop: '10px' }}>
								{comment.replies.map((reply, index) => (
									<div key={index} style={{ border: '1px solid #eee', margin: '5px 0', padding: '5px' }}>
										<strong>{reply.username}</strong>
										<p>{reply.content}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CourseDiscussion;
