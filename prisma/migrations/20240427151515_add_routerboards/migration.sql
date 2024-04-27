-- CreateTable
CREATE TABLE "RouterBoard" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "boardName" TEXT,
    "version" TEXT,

    CONSTRAINT "RouterBoard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RouterBoardsOnUsers" (
    "userId" TEXT NOT NULL,
    "routerBoardId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "RouterBoardsOnUsers_pkey" PRIMARY KEY ("userId","routerBoardId")
);

-- AddForeignKey
ALTER TABLE "RouterBoardsOnUsers" ADD CONSTRAINT "RouterBoardsOnUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RouterBoardsOnUsers" ADD CONSTRAINT "RouterBoardsOnUsers_routerBoardId_fkey" FOREIGN KEY ("routerBoardId") REFERENCES "RouterBoard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
