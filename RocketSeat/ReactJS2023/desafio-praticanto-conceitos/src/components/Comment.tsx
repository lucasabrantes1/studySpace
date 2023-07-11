import styles from './Comment.module.css'
import { ThumbsUp } from "phosphor-react";
import { Trash } from "phosphor-react";
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps){
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment(){
    onDeleteComment(content)
  }

  function handleLikeComment(){
    setLikeCount(likeCount + 1);
  }


    return(
        <div className={styles.comment}>
          <Avatar 
          hasBorder={false} 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWGlDtbPZ19JRq2HhEa-Pl1191GzlHKo7zgFjyYykXsA&s"
          />

          <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                      <strong>Lucas Abrantes</strong>
                      <time title="24 de Julho às 13:06" dateTime="2023-06-24 13:05:13">Cerca de 1h atrás</time>
                    </div>

                  <button onClick={handleDeleteComment} title="Deletar comentario">
                    <Trash size={24}/>
                  </button>
                </header>
                <p>{content}</p>
            </div>
            <footer className="">
                <button onClick={handleLikeComment}>
                    <ThumbsUp />
                    Aplaudir <span>{likeCount}</span>
                </button>
            </footer>
          </div>
        </div>
    )
}