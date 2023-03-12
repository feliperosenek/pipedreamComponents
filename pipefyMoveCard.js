import fetch from "node-fetch"

export default {
    name: "Pipefy Move Card Phase",
    description: "Move any card for any phase",
    key: "pipefy_move_card_phase",
    version: "0.0.1",
    type: "action",
    props: {
        pipefyAuth: {
            type: "app",
            app: "pipefy",
        },
        cardId: {
            type: "string",
            label: "Card ID",
        },
        phaseId: {
            type: "string",
            label: "Phase ID",
        }

    },
    async run() {

        await fetch('https://api.pipefy.com/graphql', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Authorization': "Bearer " + this.pipefyAuth.$auth.token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: 'mutation {moveCardToPhase(input: {card_id: ' + this.cardId + ', destination_phase_id:' + this.phaseId + '}) { clientMutationId} }'
                })
            })
            .catch(err => console.log(err))
    },
}