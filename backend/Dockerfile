# Usando uma imagem Python slim
FROM python:3.10-slim

# Definindo o diretório de trabalho dentro do container
WORKDIR /app

# Instalando dependências necessárias para Poetry e build do Python
RUN apt-get update && \
    apt-get install -y curl build-essential && \
    rm -rf /var/lib/apt/lists/*

# Instalando o Poetry
RUN curl -sSL https://install.python-poetry.org | python3 -

# Adicionando o Poetry ao PATH
ENV PATH="/root/.local/bin:$PATH"

# Copiando os arquivos de configuração do Poetry
COPY pyproject.toml poetry.lock /app/

# Instalando as dependências do Poetry
RUN poetry config virtualenvs.create false && poetry install --no-interaction --no-ansi

# Copiando o restante dos arquivos do projeto
COPY . /app/

# Expondo a porta padrão do Django
EXPOSE 8000

# Comando para iniciar o servidor Django
CMD ["poetry", "run", "python", "manage.py", "runserver", "0.0.0.0:8000"]
