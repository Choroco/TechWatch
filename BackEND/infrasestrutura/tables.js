class Tables {
    init(conexao) {
        this.conexao = conexao;
        this.createTableComputador();
        this.createTableUsers();
        this.insertDefaultUser();
        this.insertDefaultComputer();
    }

    createTableComputador () {
        const sql = `
        CREATE TABLE IF NOT EXISTS computador (
        id int NOT NULL AUTO_INCREMENT,
        mac varchar(45) NOT NULL,
        localHostName varchar(45) NOT NULL,
        dataDeInstalacao varchar(45) NOT NULL,
        processador varchar(50) NOT NULL,
        ramSize double NOT NULL,
        sistemaOperacional varchar(50) NOT NULL,
        ip varchar(45) NOT NULL,
        loja varchar(5) NOT NULL,
        dataAtual date DEFAULT NULL,
        PRIMARY KEY (id)
        ) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
        `;

        this.conexao.query(sql, (error) => {
            if (error) {
                console.log("Erro: Tabela computador nao criada");
                console.log(error.message);
                return;
            }
            console.log("Tabela computador validada!");
        })
    }
    createTableUsers () {
        const sql = `
        CREATE TABLE IF NOT EXISTS users (
        id int NOT NULL AUTO_INCREMENT,
        login varchar(250) NOT NULL,
        password longtext NOT NULL,
        role varchar(50) NOT NULL,
        PRIMARY KEY (id),
        UNIQUE KEY login_UNIQUE (login),
        UNIQUE KEY id_UNIQUE (id)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
        `;

        this.conexao.query(sql, (error) => {
            if (error) {
                console.log("Erro: Tabela users nao criada");
                console.log(error.message);
                return;
            }
            console.log("Tabela users validada!");
        })
    }
    insertDefaultUser() {
        const checkUserSql = `SELECT COUNT(*) AS count FROM users`;
        
        this.conexao.query(checkUserSql, (error, results) => {
            if (error) {
                console.log("Erro ao verificar usuários");
                console.log(error.message);
                return;
            }

            if (results[0].count === 0) {
                const insertSql = `
                INSERT INTO users (login, password, role)
                VALUES ('user', '$2a$10$41RExmm4kstM1WQZBO9vwOFMjzyZCoFSPDPYZSzAuADazrlPcZ0XG', 'USER')
                `;

                this.conexao.query(insertSql, (error) => {
                    if (error) {
                        console.log("Erro ao inserir usuário padrão");
                        console.log(error.message);
                        return;
                    }
                    console.log("Usuário padrão inserido!");
                });
            } else {
                console.log("Usuário(s) já existe(m), não será inserido usuário padrão.");
            }
        });
    }
    insertDefaultComputer() {
        const checkComputadorSql = `SELECT COUNT(*) AS count FROM computador`;
        
        this.conexao.query(checkComputadorSql, (error, results) => {
            if (error) {
                console.log("Erro ao verificar computadores");
                console.log(error.message);
                return;
            }

            if (results[0].count === 0) {
                const insertSql = `
                INSERT INTO computador ( mac, localHostName, dataDeInstalacao, processador, ramSize, sistemaOperacional, ip, loja, dataAtual)
                VALUES ('5c:15:d3:77:4d:90', 'DESKTOP', '23/09/2024', 'Intel Core i7', 12, ' Windows 10', '192.198.0.107', '1', null)
                `;

                this.conexao.query(insertSql, (error) => {
                    if (error) {
                        console.log("Erro ao inserir computador padrão");
                        console.log(error.message);
                        return;
                    }
                    console.log("Computador padrão inserido!");
                });
            } else {
                console.log("Computador(es) já existe(m), não será inserido um computador padrão.");
            }
        });
    }
}

module.exports = new Tables();