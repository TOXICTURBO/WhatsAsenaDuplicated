FROM fusuf/whatsasena:latest

RUN git clone https://github.com/TOXICTURBO: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@github.com/TOXICTURBO/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
