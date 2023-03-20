import './SessionForm.css';

const SessionForm = () => {
    return (
        <form>
            <div className="new-session__controls">
                <div className="new-session__control">
                    <label>Languages / Frameworks</label>
                    <input type="text" placeholder="HTML, React, Laravel, TypeScript..."/>
                </div>
                <div className="new-session__control">
                    <label>Recorded Time</label>
                    <input type="number" min="0.01" step="0.01" placeholder="input time in decimal" />
                </div>
                <div className="new-session__control">
                    <label>Mood</label>
                    <input type="text" placeholder="how do you feel about your session?" />
                </div>
                <div className="new-session__control">
                    <label>Date</label>
                    <input type="date" min="01-01-2023" max="12-31-2023" />
                </div>
            </div>
            <div className="new-session__actions">
                <button type="submit">Add Session</button>
            </div>
        </form>
    )
};

export default SessionForm;