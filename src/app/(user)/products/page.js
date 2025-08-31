"use client";
import { Grid, Card, CardContent, CardActions } from "@mui/material";
import ProductCard from "./productCard";
import { products } from "@/constant/product_list";
import { useState, useEffect } from "react";
import CommonSkeleton from "@/components/custom/skeleton";

export default function Product() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Grid container spacing={2} justifyContent="center" sx={{ p: 2 }}>
      {(loading ? products : products).map((product) => (
        <Grid item key={product.id} xs={6}sm={6}>
          {loading ? (
            <Card sx={{ p: 1 , width:"150px"}} >
              {/* Image Skeleton */}
              <CommonSkeleton
                type="rectangle"
                width="100%"
                height={140}
                sx={{ borderRadius: 1 }}
              />
              <CardContent>
                {/* Title Skeleton */}
                <CommonSkeleton type="text" width="60%" height={25} sx={{ mb: 1 }} />
                {/* Price Skeleton */}
                <CommonSkeleton type="text" width="40%" height={20} />
              </CardContent>
              <CardActions>
                {/* Button Skeleton */}
                <CommonSkeleton type="rectangle" width="50%" height={36} />
              </CardActions>
            </Card>
          ) : (
            <ProductCard {...product} />
          )}
        </Grid>
      ))}
    </Grid>
  );
}
