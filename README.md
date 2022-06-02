# phase4-deployAngularInS3Bucket
1.	Creating the project in Visual Studio
2.	Create a angular project
3.	Sign up free aws account
4.	Create bucket in s3 services
5.	Edit permission as public access and change the bucket policy
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AddPermission",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::onlinetestbucket/*"
        }
    ]
}
6.	Upload dist files of angular application and create static website for bucket
7.	Finally click on the static website link and your application is in air now(CLOUD)
