import { PostPreview } from "./PostPreview";

export const EditPost = ({ handleClickCancel, editTurn }) => {
    return (
        <div>
                {editTurn ? <button onClick={handleClickCancel}>X</button> :
                <PostPreview handleClickEdit={handleClickCancel} editTurn={editTurn} />
            }
        </div>
    );
};
