import SentListResults from "./Sent/SentListResults";

function Massages({ sentList, contact, me }) {

    return (
        // <!--Massages-->
        <div className="messages">
            <ul className="listClass">
                <SentListResults Massages={sentList} contact={contact} me={me} />
                {/* <Replied /> */}
            </ul>
        </div>
    );
}

export default Massages;