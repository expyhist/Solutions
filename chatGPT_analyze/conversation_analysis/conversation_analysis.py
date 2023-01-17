import requests
import base64


def init_send_message(content: str):
    base64_encode_content = base64.b64encode(content.encode("utf-8"))

    url = "http://localhost:3000/api/chatGPT"
    payload = {
        "encodeContent": base64_encode_content.decode("utf-8"),
    }
    r = requests.post(url=url, data=payload)

    return r.json()


def send_message_in_the_same_conversation(content: str, init_res: dict):
    conversation_id, message_id = init_res.values()
    base64_encode_content = base64.b64encode(content.encode("utf-8"))

    url = "http://localhost:3000/api/chatGPT"
    payload = {
        "encodeContent": base64_encode_content.decode("utf-8"),
        "conversationId":  conversation_id,
        "messageId": message_id
    }
    r = requests.post(url=url, data=payload)

    return r.json()


def main():
    content = """Is this conversation illegal or fraud, and using one word to explain why you thought that.
    this conversation:
    A:Hello my name is jhon  I am the owner of the  brothel where you maintained communication with one of my girls to request a service and you only lost time and took advantage of my business the only thing that interests me is that you pay me for the lost time of the girl since in my business we do not tolerate what she did. We are going to solve this problem for good you only have to pay the fine if you refuse to pay the fine your family will be involved in the whole problem because of you..…..
    B:Ok
    B:How much
    A:Hello my name is jhon  I am the owner of the  brothel where you maintained communication with one of my girls to request a service and you only lost time and took advantage of my business the only thing that interests me is that you pay me for the lost time of the girl since in my business we do not tolerate what she did. We are going to solve this problem for good you only have to pay the fine if you refuse to pay the fine your family will be involved in the whole problem because of you..….
    A:Klk
    B:Klk
    B:Klk
    B:Klk
    """
    init_res = init_send_message(content)
    send_message_in_the_same_conversation(content, init_res)


if __name__ == '__main__':
    main()
