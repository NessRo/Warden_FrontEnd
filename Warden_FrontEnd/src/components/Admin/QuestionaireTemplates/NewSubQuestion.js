import React from 'react';

export default function NewSubQuestion({ Section, Question }) {
    return (
        <>
            {(() => {
                switch (Question.conditional_question.condition_sub_question.type) {
                    case 'free-text-small':
                        return <div>Content for Section 1</div>;
                    case 'free-text-large':
                        return <div>Content for Section 2</div>;
                    case 'drop-down':
                        return <div>Content for Section 3</div>;
                    default:
                        return <div>Default content if no section matches</div>;
                }
            })()}
        </>
    );
}
