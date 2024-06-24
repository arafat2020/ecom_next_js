-- CreateTable
CREATE TABLE "ProductPayment" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "finalPrice" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "createPaymentId" TEXT,

    CONSTRAINT "ProductPayment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CreatePayment" (
    "id" TEXT NOT NULL,

    CONSTRAINT "CreatePayment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductPayment" ADD CONSTRAINT "ProductPayment_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductPayment" ADD CONSTRAINT "ProductPayment_createPaymentId_fkey" FOREIGN KEY ("createPaymentId") REFERENCES "CreatePayment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
