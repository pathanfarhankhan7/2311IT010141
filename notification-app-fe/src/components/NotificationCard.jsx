import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
} from "@mui/material";

export function NotificationCard({ notification, viewed }) {
  return (
    <Card
      sx={{
        opacity: viewed ? 0.6 : 1,
        bgcolor: viewed ? "#f5f5f5" : "white",
        transition: "0.3s",
      }}
    >
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6">
            {notification.Type}
          </Typography>

          <Chip
            label={notification.Type}
            color="primary"
            size="small"
          />
        </Stack>

        <Typography sx={{ mt: 1 }}>
          {notification.Message}
        </Typography>

        <Typography
          variant="caption"
          color="text.secondary"
        >
          {notification.Timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
}