import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const breedsService = createApi({
  reducerPath: "breeds",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dog.ceo/api/",
  }),
  endpoints: (builder) => ({
    getBreeds: builder.query({
      query: () => ({
        url: "breeds/list/all",
        method: "GET",
      }),
    }),
    getSubBreeds: builder.mutation({
        query: (breed) => 
        ({
          url: `breed/${breed}/list`,
          method: "GET",
        }),
      }),
      getBreedsImages: builder.mutation({
        query: (breedCount) => ({
          url: `breeds/image/random/${breedCount}`,
          method: "GET",
        }),
      }),
    // addSkill: builder.mutation({
    //   invalidatesTags: ["skills"],
    //   query: (formdata) => ({
    //     url: ``,
    //     method: "POST",
    //     body: formdata,
    //   }),
    //   // console.log("formdata", formdata),
    // }),
    // updateSkill: builder.mutation({
    //   invalidatesTags: ["skills"],
    //   query: (formdata) => ({
    //     url: `${formdata?.id}`,
    //     method: "PATCH",
    //     body: formdata,
    //   }),
    //   // console.log("formdata", formdata),
    // }),
    // deleteSkill: builder.mutation({
    //   query: (id) => ({
    //     url: `${id}`,
    //     method: "DELETE",
    //     // body: formdata,
    //   }),
    //   invalidatesTags: ["skills"],
    // }),
  }),
});
export const {
  useGetBreedsQuery,
  useGetSubBreedsMutation,
  useGetBreedsImagesMutation
//   useAddSkillMutation,
//   useDeleteSkillMutation,
//   useUpdateSkillMutation,
} = breedsService;
