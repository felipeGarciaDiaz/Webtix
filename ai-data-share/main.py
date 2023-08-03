import mysql.connector

def main():
    # Connect to database
    DSDB = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="webtix"
    )
    # Create cursor
    CURSOR = DSDB.cursor()
    # Get all data from table
    CURSOR.execute("SELECT * FROM `data-share-logs`")
    for rows in CURSOR:
        print(rows)

    
    def ARTIFICIAL_INTELLIGENCE():
        print("")


if __name__ == '__main__':
    main()
